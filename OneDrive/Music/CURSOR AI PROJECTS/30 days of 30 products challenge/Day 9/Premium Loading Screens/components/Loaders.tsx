
import React from 'react';

// ... (existing exports 1-50 preserved in previous turns) ...
// Re-exporting all 60 for consistency as per guidelines

export const LuxurySpinner: React.FC = () => (
  <div className="relative w-24 h-24">
    <div className="absolute inset-0 border-[5px] border-t-amber-400 border-r-transparent border-b-transparent border-l-transparent rounded-full shadow-[0_-2px_10px_rgba(251,191,36,0.3)]" style={{ animation: 'luxury-spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />
    <div className="absolute inset-3 border-[3px] border-t-transparent border-r-transparent border-b-amber-600 border-l-transparent rounded-full opacity-60" style={{ animation: 'luxury-spin-rev 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />
    <div className="absolute inset-6 border-[2px] border-t-amber-200 border-r-transparent border-b-transparent border-l-transparent rounded-full opacity-30" style={{ animation: 'luxury-spin 1.8s linear infinite' }} />
    <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-amber-400 rounded-full blur-[1px] shadow-[0_0_12px_#fbbf24]" />
  </div>
);
export const PulseWave: React.FC = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    {[0, 1, 2, 3].map((i) => (
      <div key={i} className="absolute w-full h-full border border-blue-400/30 rounded-full" style={{ animation: 'pulse-wave 2.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite', animationDelay: `${i * 0.6}s` }} />
    ))}
    <div className="w-5 h-5 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.6)] z-10" />
  </div>
);
export const SkeletonLoader: React.FC = () => (
  <div className="w-60 p-5 bg-slate-800/50 border border-slate-700/50 rounded-2xl space-y-4 overflow-hidden relative shadow-inner">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-slate-700/40 rounded-2xl relative overflow-hidden shrink-0"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]" style={{ animation: 'shimmer 1.8s ease-in-out infinite' }} /></div>
      <div className="flex-1 space-y-3">
        <div className="h-2.5 w-3/4 bg-slate-700/40 rounded-full relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]" style={{ animation: 'shimmer 1.8s ease-in-out infinite' }} /></div>
        <div className="h-2.5 w-1/2 bg-slate-700/40 rounded-full relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]" style={{ animation: 'shimmer 1.8s ease-in-out infinite' }} /></div>
      </div>
    </div>
    <div className="h-2.5 w-full bg-slate-700/40 rounded-full relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]" style={{ animation: 'shimmer 1.8s ease-in-out infinite' }} /></div>
  </div>
);
export const ProgressBarDeluxe: React.FC = () => (
  <div className="w-64 space-y-5">
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Deployment</span>
        <span className="text-xs font-semibold text-white/90">Syncing Assets...</span>
      </div>
      <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">85%</span>
    </div>
    <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden relative border border-white/5 shadow-inner">
      <div className="h-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)]" style={{ animation: 'progress-fill 4s ease-in-out infinite' }} />
    </div>
  </div>
);
export const OrbitingDots: React.FC = () => {
  const dots = [{ color: '#818CF8', delay: '0s' }, { color: '#F472B6', delay: '0.4s' }, { color: '#2DD4BF', delay: '0.8s' }, { color: '#FBBF24', delay: '1.2s' }];
  return (
    <div className="relative w-32 h-32">
      {dots.map((dot, i) => (
        <div key={i} className="absolute inset-0 m-auto w-3.5 h-3.5 rounded-full" style={{ backgroundColor: dot.color, boxShadow: `0 0 20px ${dot.color}66`, animation: 'orbit 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite', animationDelay: dot.delay }} />
      ))}
      <div className="absolute inset-0 m-auto w-2 h-2 bg-white/10 rounded-full border border-white/20" />
    </div>
  );
};
export const GlitchEffect: React.FC = () => (
  <div className="relative group p-4">
    <div className="absolute inset-0 bg-fuchsia-500/10 blur-[40px] group-hover:bg-fuchsia-500/25 transition-all duration-1000" />
    <div className="relative w-24 h-24 bg-slate-950 border border-fuchsia-500/50 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(217,70,239,0.2)]">
      <div className="relative z-10 text-fuchsia-400 font-black text-3xl italic tracking-tighter">SYNC</div>
      <div className="absolute inset-0 z-20 text-blue-400 font-black text-3xl italic tracking-tighter mix-blend-screen opacity-0 group-hover:opacity-70 flex items-center justify-center" style={{ animation: 'glitch 0.3s infinite', left: '2px' }}>SYNC</div>
      <div className="absolute inset-0 z-20 text-red-400 font-black text-3xl italic tracking-tighter mix-blend-screen opacity-0 group-hover:opacity-70 flex items-center justify-center" style={{ animation: 'glitch 0.4s infinite reverse', left: '-2px' }}>SYNC</div>
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px]" />
    </div>
  </div>
);
export const LiquidMorph: React.FC = () => (
  <div className="relative flex items-center justify-center w-32 h-32">
    <div className="w-24 h-24 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-700 shadow-[0_20px_50px_rgba(37,99,235,0.4)]" style={{ animation: 'morph 6s ease-in-out infinite' }} />
    <div className="absolute inset-0 border border-white/5 rounded-full scale-125 opacity-20" />
  </div>
);
export const ParticleBurst: React.FC = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    {[...Array(12)].map((_, i) => {
      const angle = (i * 30) * (Math.PI / 180);
      const dist = 60 + Math.random() * 20;
      const x = Math.cos(angle) * dist;
      const y = Math.sin(angle) * dist;
      return (
        <div key={i} className="absolute w-2 h-2 rounded-full shadow-lg" style={{ backgroundColor: `hsl(${i * 30}, 80%, 65%)`, '--tw-translate-x': `${x}px`, '--tw-translate-y': `${y}px`, animation: 'burst 1.5s cubic-bezier(0.19, 1, 0.22, 1) infinite', animationDelay: `${i * 0.08}s` } as React.CSSProperties} />
      );
    })}
    <div className="w-4 h-4 bg-white/40 rounded-full animate-ping opacity-20" />
  </div>
);
export const FlipCards: React.FC = () => (
  <div className="flex items-center space-x-6">
    {[{ bg: 'bg-indigo-500', shadow: 'shadow-indigo-500/40' }, { bg: 'bg-rose-500', shadow: 'shadow-rose-500/40' }, { bg: 'bg-emerald-500', shadow: 'shadow-emerald-500/40' }].map((card, i) => (
      <div key={i} className={`w-10 h-16 rounded-xl ${card.bg} ${card.shadow} shadow-lg border border-white/10`} style={{ animation: 'flip 2.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite', animationDelay: `${i * 0.25}s`, transformStyle: 'preserve-3d' }} />
    ))}
  </div>
);
export const NeonPulse: React.FC = () => (
  <div className="relative w-28 h-28 flex items-center justify-center">
    <div className="absolute inset-0 border-[3px] border-cyan-400 rounded-full text-cyan-400" style={{ animation: 'neon-pulse 2.2s ease-in-out infinite' }} />
    <div className="absolute inset-5 border-[2px] border-pink-500 rounded-full text-pink-500 opacity-60" style={{ animation: 'neon-pulse 2.2s ease-in-out infinite', animationDelay: '0.4s' }} />
    <div className="absolute inset-10 border border-amber-400 rounded-full text-amber-400 opacity-40" style={{ animation: 'neon-pulse 2.2s ease-in-out infinite', animationDelay: '0.8s' }} />
    <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_25px_#fff]" />
  </div>
);
export const DNAHelix: React.FC = () => (
  <div className="relative w-40 h-24 flex items-center justify-center gap-2" style={{ perspective: '800px' }}>
    {[...Array(12)].map((_, i) => (
      <div key={i} className="relative w-2 h-20">
        <div className="absolute w-2 h-2 bg-emerald-400 rounded-full" style={{ animation: 'dna-move 2s ease-in-out infinite', animationDelay: `${i * 0.15}s`, top: '0' }} />
        <div className="absolute w-2 h-2 bg-blue-500 rounded-full" style={{ animation: 'dna-move 2s ease-in-out infinite', animationDelay: `${(i * 0.15) - 1}s`, bottom: '0' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-white/10" />
      </div>
    ))}
  </div>
);
export const TypewriterLoader: React.FC = () => (
  <div className="flex flex-col items-center space-y-4 font-mono">
    <div className="relative inline-block"><div className="text-emerald-500 text-2xl font-bold whitespace-nowrap overflow-hidden border-r-4 border-emerald-500" style={{ animation: 'typewriter 3s steps(10) infinite, blink 0.5s step-end infinite' }}>LOADING...</div></div>
  </div>
);
export const BouncingBalls: React.FC = () => (
  <div className="flex items-end space-x-4 h-24">
    {[{ color: 'bg-red-400', delay: '0s' }, { color: 'bg-yellow-400', delay: '0.1s' }, { color: 'bg-green-400', delay: '0.2s' }, { color: 'bg-blue-400', delay: '0.3s' }, { color: 'bg-purple-400', delay: '0.4s' }].map((ball, i) => (
      <div key={i} className="relative flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full ${ball.color} shadow-lg`} style={{ animation: 'bounce 0.8s ease-in-out infinite', animationDelay: ball.delay }} />
        <div className="w-4 h-1 bg-black/30 rounded-full mt-1 blur-[1px] scale-x-75 animate-pulse" />
      </div>
    ))}
  </div>
);
export const InfinityLoader: React.FC = () => (
  <div className="relative">
    <svg className="w-32 h-16 overflow-visible" viewBox="0 0 100 50">
      <path d="M25 15 C 5 15, 5 35, 25 35 C 45 35, 55 15, 75 15 C 95 15, 95 35, 75 35 C 55 35, 45 15, 25 15" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
      <path d="M25 15 C 5 15, 5 35, 25 35 C 45 35, 55 15, 75 15 C 95 15, 95 35, 75 35 C 55 35, 45 15, 25 15" fill="none" stroke="url(#infinityGradient)" strokeWidth="4" strokeDasharray="100 100" strokeDashoffset="200" style={{ animation: 'infinity-dash 2s linear infinite' }} />
      <defs><linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#A855F7" /><stop offset="100%" stopColor="#3B82F6" /></linearGradient></defs>
    </svg>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-xl bg-purple-500/10 pointer-events-none" />
  </div>
);
export const HexagonGrid: React.FC = () => (
  <div className="grid grid-cols-3 gap-1 relative">
    {[...Array(7)].map((_, i) => (
      <div key={i} className={`${i === 0 || i === 6 ? 'opacity-0' : ''} w-8 h-9 bg-amber-500 text-amber-500`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animation: i !== 0 && i !== 6 ? 'hex-pulse 1.5s ease-in-out infinite' : 'none', animationDelay: `${i * 0.2}s` }} />
    ))}
  </div>
);
export const SoundWave: React.FC = () => (
  <div className="flex items-center space-x-1.5 h-16">
    {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4].map((scale, i) => (
      <div key={i} className="w-2 bg-gradient-to-t from-cyan-400 to-purple-500 rounded-full" style={{ height: '100%', animation: 'wave-anim 1s ease-in-out infinite', animationDelay: `${i * 0.1}s` }} />
    ))}
  </div>
);
export const ClockLoader: React.FC = () => (
  <div className="relative w-24 h-24 border-4 border-slate-700 rounded-full">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-1 h-9 bg-white rounded-full origin-bottom" style={{ animation: 'clock-hand 2s linear infinite' }} />
    <div className="absolute inset-0 m-auto w-2 h-2 bg-white rounded-full" />
  </div>
);
export const CubeFlip3D: React.FC = () => (
  <div className="w-16 h-16" style={{ perspective: '800px' }}>
    <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d', animation: 'cube-3d 4s linear infinite' }}>
      <div className="absolute inset-0 bg-blue-500/80 border border-white/20" style={{ transform: 'translateZ(32px)' }} />
      <div className="absolute inset-0 bg-red-500/80 border border-white/20" style={{ transform: 'rotateY(180deg) translateZ(32px)' }} />
      <div className="absolute inset-0 bg-green-500/80 border border-white/20" style={{ transform: 'rotateY(90deg) translateZ(32px)' }} />
      <div className="absolute inset-0 bg-yellow-500/80 border border-white/20" style={{ transform: 'rotateY(-90deg) translateZ(32px)' }} />
      <div className="absolute inset-0 bg-purple-500/80 border border-white/20" style={{ transform: 'rotateX(90deg) translateZ(32px)' }} />
      <div className="absolute inset-0 bg-orange-500/80 border border-white/20" style={{ transform: 'rotateX(-90deg) translateZ(32px)' }} />
    </div>
  </div>
);
export const RocketLaunch: React.FC = () => (
  <div className="relative flex flex-col items-center">
    <div className="relative" style={{ animation: 'rocket-launch 0.5s ease-in-out infinite' }}>
       <svg className="w-16 h-16 text-slate-100" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2.5c0,0-5.5,5-5.5,11.5c0,1,0.5,2,1.5,2.5v1.5l2,1.5l2-1.5v-1.5c1-0.5,1.5-1.5,1.5-2.5C17.5,7.5,12,2.5,12,2.5z" /></svg>
       <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-8 bg-gradient-to-b from-orange-400 to-red-600 rounded-full blur-[2px]" style={{ animation: 'flame-pulse 0.2s linear infinite' }} />
    </div>
  </div>
);
export const HeartbeatPulse: React.FC = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    <svg className="w-20 h-20 text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]" viewBox="0 0 24 24" fill="currentColor" style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
  </div>
);
export const MatrixRain: React.FC = () => (
  <div className="flex space-x-3 overflow-hidden h-32 w-40 relative border border-emerald-500/10 rounded-lg p-2 bg-black/40">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="flex flex-col text-[10px] text-emerald-500 font-mono leading-none opacity-80" style={{ animation: 'matrix-fall 3s linear infinite', animationDelay: `${i * 0.4}s` }}>
        <span>1</span><span>0</span><span>A</span><span>7</span><span>F</span><span>X</span><span>0</span><span>1</span><span>9</span>
      </div>
    ))}
  </div>
);
export const PizzaLoader: React.FC = () => (
  <div className="relative w-28 h-28 flex items-center justify-center">
    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="#FACC15" stroke="#EA580C" strokeWidth="4" />
      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0F172A" strokeWidth="82" strokeDasharray="251" strokeDashoffset="0" style={{ animation: 'pizza-eat 3s steps(8) infinite' }} />
    </svg>
  </div>
);
export const AtomOrbiter: React.FC = () => (
  <div className="relative w-32 h-32 flex items-center justify-center" style={{ perspective: '500px' }}>
    <div className="w-4 h-4 bg-white rounded-full" />
    {[0, 120, 240].map((angle, i) => (
      <div key={i} className="absolute w-24 h-8 border border-white/20 rounded-full" style={{ transform: `rotateZ(${angle}deg) rotateX(65deg)` }} />
    ))}
  </div>
);
export const SnakeSpiral: React.FC = () => (
  <svg className="w-32 h-32" viewBox="0 0 100 100">
    <path d="M50,50 Q60,40 70,50 Q80,60 70,70 Q60,80 50,70 Q40,60 50,50 Q65,30 85,50" fill="none" stroke="#A855F7" strokeWidth="4" strokeDasharray="500" style={{ animation: 'spiral-snake 3s ease-in-out infinite' }} />
  </svg>
);
export const TetrisBlocks: React.FC = () => (
  <div className="relative w-32 h-32 flex items-center justify-center overflow-hidden border border-white/5 rounded-2xl">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="absolute w-12 h-4 bg-cyan-400 opacity-0 rounded-sm" style={{ animation: 'tetris-fall 4s linear infinite', animationDelay: `${i}s` }} />
    ))}
  </div>
);
export const WifiSignal: React.FC = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    <div className="absolute bottom-10 w-4 h-4 bg-cyan-500 rounded-full" />
    {[1, 2, 3].map((i) => (
      <div key={i} className="absolute bottom-10 border-t-4 border-l-4 border-r-4 border-transparent border-t-cyan-500/40 rounded-full" style={{ width: `${i * 40}px`, height: `${i * 40}px`, animation: 'wifi-pulse 2s ease-out infinite', animationDelay: `${i * 0.4}s` }} />
    ))}
  </div>
);
export const HourglassSand: React.FC = () => (
  <div className="relative w-16 h-28 flex flex-col items-center" style={{ animation: 'hourglass-sand 4s ease-in-out infinite' }}>
    <div className="w-12 h-12 border-4 border-amber-600 rounded-t-xl overflow-hidden"><div className="w-full h-full bg-amber-500/40" style={{ animation: 'progress-fill 4s linear infinite reverse' }} /></div>
    <div className="w-12 h-12 border-4 border-amber-600 rounded-b-xl overflow-hidden"><div className="w-full h-full bg-amber-500/40" style={{ animation: 'progress-fill 4s linear infinite' }} /></div>
  </div>
);
export const GearMechanics: React.FC = () => (
  <div className="relative w-32 h-32">
    <div className="absolute top-4 left-4 w-16 h-16 border-4 border-slate-500 rounded-full" style={{ animation: 'gear-rotate 4s linear infinite' }} />
    <div className="absolute bottom-4 right-4 w-12 h-12 border-4 border-slate-400 rounded-full" style={{ animation: 'gear-rotate 3s linear infinite reverse' }} />
  </div>
);
export const LightningBolt: React.FC = () => (
  <svg className="w-24 h-32 text-amber-400" viewBox="0 0 24 24" fill="currentColor" style={{ animation: 'lightning-glow 1.5s ease-in-out infinite' }}><path d="M11 15H6l7-14v8h5l-7 14v-8z" /></svg>
);
export const OrigamiBird: React.FC = () => (
  <div style={{ animation: 'origami-bob 2s ease-in-out infinite' }}>
    <svg className="w-32 h-32 text-purple-400" viewBox="0 0 100 100"><polygon points="50,50 70,70 30,70" fill="currentColor" /><polygon points="50,50 20,20 30,70" fill="currentColor" style={{ animation: 'origami-flap 1.5s ease-in-out infinite' }} /></svg>
  </div>
);
export const SolarSystem: React.FC = () => (
  <div className="relative w-36 h-36 flex items-center justify-center">
    <div className="w-6 h-6 bg-yellow-400 rounded-full z-10" />
    {[ { size: 'w-2 h-2', color: 'bg-blue-400', orbit: 'w-16 h-16', speed: '2s' }, { size: 'w-3 h-3', color: 'bg-red-400', orbit: 'w-24 h-24', speed: '4s' } ].map((p, i) => (
      <div key={i} className={`absolute rounded-full border border-white/5 ${p.orbit}`} style={{ animation: `solar-orbit ${p.speed} linear infinite` }}><div className={`absolute -top-1 left-1/2 -translate-x-1/2 rounded-full ${p.size} ${p.color}`} /></div>
    ))}
  </div>
);
export const CoffeeSteam: React.FC = () => (
  <div className="relative flex flex-col items-center">
    <div className="flex space-x-2 mb-2">{[0, 1, 2].map(i => (<div key={i} className="w-1.5 h-8 bg-white/20 rounded-full" style={{ animation: 'steam-rise 2s ease-out infinite', animationDelay: `${i*0.4}s` }} />))}</div>
    <div className="w-16 h-12 bg-amber-900/80 rounded-b-2xl border-x-4 border-b-4 border-amber-800 relative" />
  </div>
);
export const RubiksSolve: React.FC = () => (
  <div className="w-16 h-16" style={{ perspective: '800px' }}>
    <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d', animation: 'rubiks-flip 3s ease-in-out infinite' }}><div className="absolute inset-0 bg-blue-500/80" style={{ transform: 'translateZ(32px)' }} /><div className="absolute inset-0 bg-red-500/80" style={{ transform: 'rotateY(90deg) translateZ(32px)' }} /></div>
  </div>
);
export const FingerprintScan: React.FC = () => (
  <div className="relative w-24 h-32 bg-slate-950/50 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center p-4">
    <div className="absolute inset-x-0 h-1 bg-cyan-400 shadow-[0_0_15px_#22d3ee] z-10" style={{ animation: 'fingerprint-scan 2s ease-in-out infinite' }} />
  </div>
);
export const MusicBounce: React.FC = () => (
  <div className="flex space-x-6">
    {['♪', '♫', '♪'].map((n, i) => (<div key={i} className="text-rose-400 text-4xl" style={{ animation: 'music-note-bounce 1s ease-in-out infinite', animationDelay: `${i*0.2}s` }}>{n}</div>))}
  </div>
);
export const PaintStroke: React.FC = () => (
  <div className="relative w-48 h-16"><svg className="w-full h-full" viewBox="0 0 200 60"><path d="M10,30 Q50,10 100,30 T190,30" fill="none" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" strokeDasharray="300" style={{ animation: 'paint-reveal 3s linear infinite' }} /></svg></div>
);
export const BinaryRain: React.FC = () => (
  <div className="grid grid-cols-5 gap-4 overflow-hidden h-32 w-48 font-mono text-emerald-500 text-[10px]">{[...Array(5)].map((_, i) => (<div key={i} style={{ animation: 'binary-rain 2s linear infinite', animationDelay: `${i*0.5}s` }}>1</div>))}</div>
);
export const PencilWrite: React.FC = () => (
  <div className="relative w-32 h-32"><svg className="w-24 h-24" viewBox="0 0 100 100"><path d="M20,50 L40,70 L80,30" fill="none" stroke="#94a3b8" strokeWidth="6" style={{ animation: 'pencil-write 2.5s ease-in-out infinite' }} /></svg></div>
);
export const RadarSweep: React.FC = () => (
  <div className="relative w-32 h-32 bg-emerald-950/40 rounded-full border-4 border-emerald-500/30"><div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/40 to-transparent origin-center rounded-full" style={{ animation: 'radar-sweep 3s linear infinite' }} /></div>
);
export const LavaLamp: React.FC = () => (
  <div className="relative w-32 h-48 bg-slate-900/80 border-2 border-slate-700 rounded-full overflow-hidden p-4"><div className="absolute bottom-4 left-6 w-12 h-12 bg-purple-500 blur-[2px]" style={{ animation: 'lava-lamp-blob 6s ease-in-out infinite' }} /></div>
);
export const DragonFire: React.FC = () => (
  <div className="relative flex flex-col items-center justify-center w-32 h-40">
    <svg className="w-20 h-20 text-slate-100 z-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" /></svg>
    {[...Array(6)].map((_, i) => (<div key={i} className="absolute bottom-20 w-4 h-4 bg-orange-500 rounded-full" style={{ '--dir': `${(i-3)*10}px`, animation: 'fire-breath 1.2s ease-out infinite', animationDelay: `${i*0.1}s` } as any} />))}
  </div>
);
export const SonarPing: React.FC = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">{[0, 1, 2].map(i => (<div key={i} className="absolute border-2 border-sky-400 rounded-full" style={{ animation: 'sonar-wave 3s linear infinite', animationDelay: `${i}s` }} />))}</div>
);
export const Speedometer: React.FC = () => (
  <div className="relative w-48 h-24 overflow-hidden flex items-end justify-center"><div className="w-1 h-20 bg-rose-500 origin-bottom rounded-full" style={{ animation: 'needle-swing 4s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} /></div>
);
export const OrigamiCrane: React.FC = () => (
  <svg className="w-32 h-32 text-rose-300" viewBox="0 0 100 100"><polygon points="50,50 80,40 50,70" fill="currentColor" style={{ animation: 'crane-flapping 2s ease-in-out infinite' }} /></svg>
);
export const VinylRecord: React.FC = () => (
  <div className="w-32 h-32 bg-slate-950 rounded-full flex items-center justify-center" style={{ animation: 'vinyl-record-spin 2s linear infinite' }}><div className="w-10 h-10 bg-red-600 rounded-full" /></div>
);
export const DNAMutation: React.FC = () => (
  <div className="flex gap-2" style={{ animation: 'dna-mutation 4s linear infinite' }}>{[...Array(6)].map((_, i) => (<div key={i} className="w-2 h-10 bg-emerald-400 rounded-full" style={{ animation: 'dna-move 2s ease-in-out infinite', animationDelay: `${i*0.1}s` }} />))}</div>
);
export const CompassSearch: React.FC = () => (
  <div className="relative w-32 h-32 border-4 border-amber-800 rounded-full"><div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'compass-needle 3s ease-in-out infinite' }}><div className="w-2 h-20 bg-rose-600" /></div></div>
);
export const PortalGateway: React.FC = () => (
  <div className="w-32 h-32 border-[6px] border-indigo-400 rounded-full shadow-[0_0_50px_rgba(79,70,229,0.8)]" style={{ animation: 'portal-energy 3s linear infinite' }} />
);
export const ChampagneBubbles: React.FC = () => (
  <div className="w-16 h-24 border-x-4 border-b-4 border-amber-400/30 rounded-b-full overflow-hidden flex justify-center">{[...Array(6)].map((_, i) => (<div key={i} className="absolute bottom-0 w-2 h-2 bg-amber-200 rounded-full" style={{ animation: 'bubbly-champagne 2s ease-in infinite', animationDelay: `${i*0.3}s` }} />))}</div>
);
export const NorthernLights: React.FC = () => (
  <div className="w-64 h-32 overflow-hidden bg-slate-950/40 rounded-3xl relative">{[0, 1].map(i => (<div key={i} className="absolute inset-x-0 h-20 bg-gradient-to-t from-emerald-400/40 via-cyan-500/30 to-transparent blur-[15px]" style={{ top: `${i*20}%`, animation: 'aurora-wave-ribbon 6s ease-in-out infinite', animationDelay: `${i*-2}s` }} />))}</div>
);

// --- BONUS LOADERS 51-60 ---

// 51. BITCOIN MINING
export const BitcoinMine: React.FC = () => (
  <div className="relative flex flex-col items-center justify-center w-32 h-32">
    <div className="text-amber-500 text-6xl font-bold animate-pulse drop-shadow-[0_0_15px_rgba(247,147,26,0.6)]">₿</div>
    <div className="absolute top-2 right-2 text-slate-300 transform -rotate-12" style={{ animation: 'crypto-mining 0.8s ease-in-out infinite' }}>
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.5,2L2,12.5L3.5,14L5,12.5L6,13.5L4.5,15L6,16.5L7.5,15L8.5,16L7,17.5L8.5,19L10,17.5L11,18.5L9.5,20L11.5,22L22,11.5L12.5,2Z" />
      </svg>
    </div>
  </div>
);

// 52. HEARTBEAT ECG MONITOR
export const ECGMonitor: React.FC = () => (
  <div className="relative w-64 h-32 bg-slate-900 border border-emerald-500/20 rounded-lg overflow-hidden p-2">
    <svg className="w-full h-full" viewBox="0 0 400 100">
      <path 
        d="M0 50 L50 50 L60 20 L75 80 L85 50 L150 50 L160 10 L180 90 L200 50 L300 50 L310 30 L320 70 L330 50 L400 50" 
        fill="none" 
        stroke="#10b981" 
        strokeWidth="3" 
        strokeDasharray="1000"
        style={{ animation: 'ecg-monitor 4s linear infinite' }}
      />
    </svg>
    <div className="absolute inset-0 grid grid-cols-12 opacity-5 pointer-events-none">
      {[...Array(12)].map((_, i) => <div key={i} className="border-r border-emerald-500" />)}
    </div>
  </div>
);

// 53. POPCORN POPPING
export const PopcornPop: React.FC = () => (
  <div className="relative w-32 h-40 flex items-end justify-center">
    {[...Array(10)].map((_, i) => (
      <div 
        key={i} 
        className="absolute w-4 h-4 bg-amber-100 rounded-lg shadow-sm"
        style={{ 
          left: `${Math.random() * 80}%`,
          animation: 'popcorn-popping 1.5s ease-out infinite',
          animationDelay: `${Math.random() * 2}s`
        }}
      />
    ))}
    <div className="w-16 h-12 bg-rose-600 rounded-b-xl border-x-4 border-b-4 border-rose-700 z-10" />
  </div>
);

// 54. MOON PHASES
export const MoonPhases: React.FC = () => (
  <div className="relative w-32 h-32 flex items-center justify-center bg-slate-950 rounded-full overflow-hidden border border-white/5">
    <div className="w-20 h-20 bg-slate-200 rounded-full relative shadow-[inset_0_0_20px_rgba(0,0,0,0.4),0_0_30px_rgba(255,255,255,0.1)]">
      <div className="absolute inset-0 bg-slate-950 rounded-full" 
           style={{ animation: 'moon-cycle-mask 6s ease-in-out infinite' }} />
    </div>
    {[...Array(6)].map((_, i) => (
      <div key={i} className="absolute w-0.5 h-0.5 bg-white rounded-full animate-ping" 
           style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, animationDelay: `${i*0.4}s` }} />
    ))}
  </div>
);

// 55. RUBIK SNAKE
export const RubikSnake: React.FC = () => (
  <div className="flex gap-1" style={{ perspective: '800px' }}>
    {[...Array(6)].map((_, i) => (
      <div 
        key={i} 
        className={`w-6 h-6 rounded-sm shadow-md ${['bg-red-500', 'bg-blue-500', 'bg-yellow-400', 'bg-green-500', 'bg-white', 'bg-orange-500'][i]}`}
        style={{ 
          animation: 'snake-segment 2s ease-in-out infinite', 
          animationDelay: `${i * 0.2}s`,
          transformStyle: 'preserve-3d'
        }}
      />
    ))}
  </div>
);

// 56. SPOTIFY EQ
export const SpotifyEQ: React.FC = () => (
  <div className="flex items-end gap-1.5 h-16 w-32">
    {[0.4, 0.8, 0.6, 0.9, 0.5].map((h, i) => (
      <div 
        key={i} 
        className="w-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]"
        style={{ 
          height: `${h * 100}%`,
          animation: 'wave-anim 0.8s ease-in-out infinite',
          animationDelay: `${i * 0.15}s`
        }}
      />
    ))}
  </div>
);

// 57. FIDGET SPINNER
export const FidgetSpinner: React.FC = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    <div className="relative w-full h-full" style={{ animation: 'luxury-spin 0.6s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}>
       <div className="absolute inset-0 m-auto w-8 h-8 bg-slate-400 rounded-full border-4 border-slate-600 z-10" />
       {[0, 120, 240].map((angle, i) => (
         <div key={i} className="absolute inset-0 flex flex-col items-center" style={{ transform: `rotate(${angle}deg)` }}>
            <div className="w-10 h-16 bg-slate-500 rounded-full border-4 border-slate-600 mt-2 flex items-center justify-center">
               <div className="w-4 h-4 bg-slate-800 rounded-full shadow-inner" />
            </div>
         </div>
       ))}
    </div>
  </div>
);

// 58. AMONG US WALK
export const AmongUsWalk: React.FC = () => (
  <div className="relative flex flex-col items-center">
    <div className="relative w-16 h-20 bg-rose-600 rounded-[2rem] border-4 border-slate-900 shadow-xl overflow-hidden"
         style={{ animation: 'amongus-body-bob 0.5s ease-in-out infinite' }}>
       <div className="absolute top-4 left-6 w-12 h-8 bg-sky-200 rounded-xl border-4 border-slate-900" />
       <div className="absolute -left-2 top-8 w-4 h-10 bg-rose-700 rounded-full border-4 border-slate-900" />
    </div>
    <div className="flex space-x-4 mt-[-4px]">
       <div className="w-6 h-8 bg-rose-600 border-4 border-slate-900 rounded-full" style={{ animation: 'amongus-legs-walk 0.5s ease-in-out infinite' }} />
       <div className="w-6 h-8 bg-rose-600 border-4 border-slate-900 rounded-full" style={{ animation: 'amongus-legs-walk 0.5s ease-in-out infinite reverse' }} />
    </div>
  </div>
);

// 59. POKEBALL OPEN
export const PokeballOpen: React.FC = () => (
  <div className="relative w-28 h-28">
    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ animation: 'pokeball-shake 2s ease-in-out infinite' }}>
      <div className="w-24 h-24 rounded-full border-8 border-slate-900 relative overflow-hidden flex flex-col">
         <div className="flex-1 bg-red-600 relative overflow-hidden" style={{ animation: 'pokeball-open-hinge 2s ease-in-out infinite' }}>
            <div className="absolute bottom-0 inset-x-0 h-2 bg-slate-900" />
         </div>
         <div className="flex-1 bg-white relative">
            <div className="absolute top-0 inset-x-0 h-2 bg-slate-900" />
         </div>
         <div className="absolute inset-0 m-auto w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center z-10">
            <div className="w-6 h-6 bg-white rounded-full border-2 border-slate-900 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
         </div>
      </div>
    </div>
    {/* Light burst on open */}
    <div className="absolute inset-0 bg-sky-400 blur-3xl opacity-0 rounded-full scale-150 animate-pulse pointer-events-none" 
         style={{ animation: 'neon-pulse 2s ease-in-out infinite' }} />
  </div>
);

// 60. TIKTOK GLITCH
export const TikTokGlitch: React.FC = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    <div className="text-white text-7xl font-black relative" style={{ animation: 'tiktok-glitch-anim 0.3s infinite' }}>
      <span className="relative z-10">♪</span>
      <span className="absolute inset-0 text-[#ff0050] translate-x-1 translate-y-0.5 opacity-70 z-0">♪</span>
      <span className="absolute inset-0 text-[#00f2ea] -translate-x-1 -translate-y-0.5 opacity-70 z-0">♪</span>
    </div>
    <div className="absolute bottom-4 text-[10px] text-white/40 tracking-[0.4em] uppercase font-bold">Trending</div>
  </div>
);
