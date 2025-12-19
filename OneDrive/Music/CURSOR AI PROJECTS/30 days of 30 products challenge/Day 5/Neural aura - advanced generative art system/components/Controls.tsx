
import React from 'react';
import { Config } from '../types';

interface ControlsProps {
  config: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config>>;
  onClose: () => void;
}

const Controls: React.FC<ControlsProps> = ({ config, setConfig, onClose }) => {
  const handleChange = (key: keyof Config, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const saveImage = () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `neural-aura-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-md bg-zinc-900/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-white">
        <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/5">
          <h2 className="text-lg font-bold tracking-tight">System Parameters</h2>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {/* Section: Physics */}
          <section>
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Physics Engine</h3>
            <div className="space-y-4">
              <ControlItem label="Particle Density" value={config.particleCount} min={500} max={5000} step={100} onChange={v => handleChange('particleCount', v)} />
              <ControlItem label="Friction (Drag)" value={config.friction} min={0.8} max={0.99} step={0.01} onChange={v => handleChange('friction', v)} />
              <ControlItem label="Attraction Strength" value={config.attractionStrength} min={0} max={5} step={0.1} onChange={v => handleChange('attractionStrength', v)} />
              <ControlItem label="Explosion Force" value={config.explosionForce} min={5} max={100} step={5} onChange={v => handleChange('explosionForce', v)} />
            </div>
          </section>

          {/* Section: Visuals */}
          <section>
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Aesthetics</h3>
            <div className="space-y-4">
               <div className="flex justify-between items-center">
                <span className="text-sm">Render Mode</span>
                <select 
                  value={config.renderMode} 
                  onChange={e => handleChange('renderMode', e.target.value)}
                  className="bg-zinc-800 text-xs border border-white/10 rounded px-2 py-1 outline-none focus:border-cyan-500"
                >
                  <option value="glow">Ethereal Glow</option>
                  <option value="points">Crisp Points</option>
                  <option value="lines">Neural Threads</option>
                </select>
              </div>
              <ControlItem label="Trail Length" value={1 - config.trailAlpha} min={0.5} max={0.98} step={0.01} onChange={v => handleChange('trailAlpha', 1 - v)} />
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Audio Reactivity</span>
                <input 
                  type="checkbox" 
                  checked={config.audioReactive} 
                  onChange={e => handleChange('audioReactive', e.target.checked)}
                  className="w-4 h-4 rounded border-white/10 bg-zinc-800 text-cyan-500 focus:ring-cyan-500"
                />
              </div>
            </div>
          </section>

          {/* Section: Core */}
          <section>
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Core Consciousness</h3>
             <div className="space-y-2">
                <label className="text-xs text-zinc-400">Target Consciousness Text</label>
                <input 
                  type="text" 
                  value={config.text} 
                  onChange={e => handleChange('text', e.target.value.toUpperCase())}
                  className="w-full bg-zinc-800 border border-white/10 rounded px-3 py-2 text-sm focus:border-cyan-500 outline-none transition-all uppercase"
                  placeholder="Enter word..."
                />
                <p className="text-[10px] text-zinc-500 italic">Changing text re-initializes text formation mode.</p>
             </div>
          </section>
        </div>

        <div className="p-6 bg-white/5 border-t border-white/5 flex gap-3">
          <button 
            onClick={saveImage}
            className="flex-1 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all active:scale-95"
          >
            Snapshot Canvas
          </button>
          <button 
             onClick={onClose}
             className="flex-1 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

const ControlItem: React.FC<{ label: string, value: number, min: number, max: number, step: number, onChange: (v: number) => void }> = ({ label, value, min, max, step, onChange }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-sm">
      <span className="text-zinc-400">{label}</span>
      <span className="font-mono text-cyan-400">{value}</span>
    </div>
    <input 
      type="range" 
      min={min} 
      max={max} 
      step={step} 
      value={value} 
      onChange={e => onChange(parseFloat(e.target.value))}
      className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
    />
  </div>
);

export default Controls;
