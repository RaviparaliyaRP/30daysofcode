
import React, { useState, useCallback, useEffect } from 'react';
import NeuralCanvas from './components/NeuralCanvas';
import Controls from './components/Controls';
import { DEFAULT_CONFIG } from './constants';
import { Config } from './types';

const App: React.FC = () => {
  const [config, setConfig] = useState<Config>(DEFAULT_CONFIG);
  const [showControls, setShowControls] = useState(false);
  const [fps, setFps] = useState(0);

  const toggleControls = useCallback(() => {
    setShowControls(prev => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'c') {
        toggleControls();
      }
      if (e.key === ' ') {
        setConfig(prev => ({
          ...prev,
          renderMode: prev.renderMode === 'glow' ? 'points' : (prev.renderMode === 'points' ? 'lines' : 'glow')
        }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleControls]);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* The Particle Engine */}
      <NeuralCanvas 
        config={config} 
        onFpsUpdate={setFps}
      />

      {/* Overlay UI */}
      <div className="absolute top-6 left-6 pointer-events-none z-10">
        <h1 className="text-2xl font-black tracking-tighter text-white/90 uppercase mb-1">
          Neural Aura
        </h1>
        <p className="text-xs font-medium text-cyan-400/70 tracking-widest uppercase">
          Living Digital Consciousness
        </p>
      </div>

      {/* FPS Counter */}
      {config.showFPS && (
        <div className="absolute bottom-6 left-6 text-xs font-mono text-white/40 pointer-events-none">
          {Math.round(fps)} FPS
        </div>
      )}

      {/* Hint */}
      <div className="absolute bottom-6 right-6 text-xs text-white/30 uppercase tracking-widest pointer-events-none hidden md:block">
        Press [C] for Settings • Click to Blast • Space to Toggle Mode
      </div>

      {/* Controls Overlay */}
      {showControls && (
        <Controls 
          config={config} 
          setConfig={setConfig} 
          onClose={toggleControls} 
        />
      )}

      {/* Toggle Button */}
      {!showControls && (
        <button 
          onClick={toggleControls}
          className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all group"
          title="Open Settings"
        >
          <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
