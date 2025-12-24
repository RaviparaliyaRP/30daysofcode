
import React from 'react';
import { LoaderCard } from './components/LoaderCard';
import { 
  LuxurySpinner, PulseWave, SkeletonLoader, ProgressBarDeluxe, OrbitingDots, 
  GlitchEffect, LiquidMorph, ParticleBurst, FlipCards, NeonPulse,
  DNAHelix, TypewriterLoader, BouncingBalls, InfinityLoader, HexagonGrid,
  SoundWave, ClockLoader, CubeFlip3D, RocketLaunch, HeartbeatPulse,
  MatrixRain, PizzaLoader, AtomOrbiter, SnakeSpiral, TetrisBlocks,
  WifiSignal, HourglassSand, GearMechanics, LightningBolt, OrigamiBird,
  SolarSystem, CoffeeSteam, RubiksSolve, FingerprintScan, MusicBounce,
  PaintStroke, BinaryRain, PencilWrite, RadarSweep, LavaLamp,
  DragonFire, SonarPing, Speedometer, OrigamiCrane, VinylRecord,
  DNAMutation, CompassSearch, PortalGateway, ChampagneBubbles, NorthernLights,
  BitcoinMine, ECGMonitor, PopcornPop, MoonPhases, RubikSnake,
  SpotifyEQ, FidgetSpinner, AmongUsWalk, PokeballOpen, TikTokGlitch
} from './components/Loaders';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white selection:bg-purple-500/30">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-600 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-pink-600 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <header className="text-center mb-20 fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-rose-400">
              Premium Loading Screens
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            60 Brand-Level Loaders for Modern Websites. 
            The ultimate production-ready collection for designers and engineers.
          </p>
        </header>

        {/* Loader Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <LoaderCard title="Luxury Spinner" description="Golden concentric rings with smooth counter-rotation." index={0}><LuxurySpinner /></LoaderCard>
          <LoaderCard title="Pulse Wave" description="Expanding concentric circles fading into the void." index={1}><PulseWave /></LoaderCard>
          <LoaderCard title="Skeleton Loader" description="Modern content placeholder with a high-end shimmer." index={2}><SkeletonLoader /></LoaderCard>
          <LoaderCard title="Progress Bar Deluxe" description="Fluid gradient fill with subtle glowing trail." index={3}><ProgressBarDeluxe /></LoaderCard>
          <LoaderCard title="Orbiting Dots" description="Dancings dots following a 3D circular path." index={4}><OrbitingDots /></LoaderCard>
          <LoaderCard title="Glitch Effect" description="Cyberpunk aesthetic with RGB shift and scan lines." index={5}><GlitchEffect /></LoaderCard>
          <LoaderCard title="Liquid Morph" description="Organic, flowing blob that shifts between states." index={6}><LiquidMorph /></LoaderCard>
          <LoaderCard title="Particle Burst" description="Staggered particles exploding from a central point." index={7}><ParticleBurst /></LoaderCard>
          <LoaderCard title="Flip Cards" description="Sequential 3D card flips with perspective." index={8}><FlipCards /></LoaderCard>
          <LoaderCard title="Neon Pulse" description="Electric breathing rings with atmospheric glow." index={9}><NeonPulse /></LoaderCard>
          <LoaderCard title="DNA Helix" description="Scientific double helix rotation in 3D space." index={10}><DNAHelix /></LoaderCard>
          <LoaderCard title="Terminal Type" description="Retro terminal typewriter effect with blinking cursor." index={11}><TypewriterLoader /></LoaderCard>
          <LoaderCard title="Bouncing Balls" description="Playful squash-and-stretch physics with rainbow trail." index={12}><BouncingBalls /></LoaderCard>
          <LoaderCard title="Infinity Glow" description="Elegant continuous path tracing an infinite loop." index={13}><InfinityLoader /></LoaderCard>
          <LoaderCard title="Hexagon Grid" description="Geometric honeycomb pattern lighting up sequentially." index={14}><HexagonGrid /></LoaderCard>
          <LoaderCard title="Sound Wave" description="Dynamic audio equalizer effect with rhythmic movement." index={15}><SoundWave /></LoaderCard>
          <LoaderCard title="Chronos Clock" description="Minimal timepiece concept with smooth hand rotation." index={16}><ClockLoader /></LoaderCard>
          <LoaderCard title="Cube Flip 3D" description="Complex multi-axis 3D rotation of a colorful cube." index={17}><CubeFlip3D /></LoaderCard>
          <LoaderCard title="Rocket Launch" description="Dynamic takeoff simulation with animated fire trail." index={18}><RocketLaunch /></LoaderCard>
          <LoaderCard title="Heartbeat Pulse" description="Life-like biological pulse rhythm with glowing beats." index={19}><HeartbeatPulse /></LoaderCard>
          <LoaderCard title="Matrix Rain" description="Digital downward cascade with cybernetic green trails." index={20}><MatrixRain /></LoaderCard>
          <LoaderCard title="Pizza Slice" description="Rotating gourmet pizza being enjoyed slice by slice." index={21}><PizzaLoader /></LoaderCard>
          <LoaderCard title="Atom Orbiter" description="Nuclear center with electron paths in 3D perspective." index={22}><AtomOrbiter /></LoaderCard>
          <LoaderCard title="Snake Spiral" description="Hypnotic continuous motion following a golden spiral." index={23}><SnakeSpiral /></LoaderCard>
          <LoaderCard title="Tetris Blocks" description="Falling geometric pieces stacking in a retro loop." index={24}><TetrisBlocks /></LoaderCard>
          <LoaderCard title="Wifi Signal" description="Expanding connectivity waves with a modern tech feel." index={25}><WifiSignal /></LoaderCard>
          <LoaderCard title="Hourglass Sand" description="Temporal tracking with falling particles and flip logic." index={26}><HourglassSand /></LoaderCard>
          <LoaderCard title="Gear Mechanics" description="Precision industrial movement with interlocking gears." index={27}><GearMechanics /></LoaderCard>
          <LoaderCard title="Lightning Bolt" description="Electric energy discharge with high-intensity bloom." index={28}><LightningBolt /></LoaderCard>
          <LoaderCard title="Origami Bird" description="Artistic paper-fold sculpture with elegant wing flaps." index={29}><OrigamiBird /></LoaderCard>
          <LoaderCard title="Solar System" description="Interstellar planetary orbits with unique rotational speeds." index={30}><SolarSystem /></LoaderCard>
          <LoaderCard title="Coffee Steam" description="Cozy rising steam wisps with organic vertical flow." index={31}><CoffeeSteam /></LoaderCard>
          <LoaderCard title="Rubiks Solve" description="A shifting 3D complex rotating solving sequence." index={32}><RubiksSolve /></LoaderCard>
          <LoaderCard title="Fingerprint Scan" description="Biometric security simulation with high-tech sweep." index={33}><FingerprintScan /></LoaderCard>
          <LoaderCard title="Music Bounce" description="Rhythmic musical notes dancing on STAFF lines." index={34}><MusicBounce /></LoaderCard>
          <LoaderCard title="Paint Stroke" description="Artist's brush reveal with fluid paint trail." index={35}><PaintStroke /></LoaderCard>
          <LoaderCard title="Binary Rain" description="Simplified digital cascade restricted to raw bits." index={36}><BinaryRain /></LoaderCard>
          <LoaderCard title="Pencil Writing" description="Dynamic creative sketching simulation with pencil tip." index={37}><PencilWrite /></LoaderCard>
          <LoaderCard title="Radar Sweep" description="Military-grade radial scan with detectable blips." index={38}><RadarSweep /></LoaderCard>
          <LoaderCard title="Lava Lamp" description="Relaxing organic morphing blobs with fluid physics." index={39}><LavaLamp /></LoaderCard>
          <LoaderCard title="Dragon Breath" description="Fantasy fire discharge simulation with flickering embers." index={40}><DragonFire /></LoaderCard>
          <LoaderCard title="Sonar Ping" description="Deep-sea submarine detection with echoing circular waves." index={41}><SonarPing /></LoaderCard>
          <LoaderCard title="Speedometer" description="Dynamic automotive gauge with realistic needle physics." index={42}><Speedometer /></LoaderCard>
          <LoaderCard title="Origami Crane" description="Traditional Japanese paper art with elegant wing motion." index={43}><OrigamiCrane /></LoaderCard>
          <LoaderCard title="Vinyl Record" description="Authentic retro turntable experience with tonearm depth." index={44}><VinylRecord /></LoaderCard>
          <LoaderCard title="DNA Mutation" description="Advanced genetic sequencing with luminescent mutation points." index={45}><DNAMutation /></LoaderCard>
          <LoaderCard title="Compass Search" description="Vibrant navigation tool searching for true North." index={46}><CompassSearch /></LoaderCard>
          <LoaderCard title="Portal Gateway" description="Swirling mystical vortex opening to another dimension." index={47}><PortalGateway /></LoaderCard>
          <LoaderCard title="Champagne Bubbles" description="Celebratory sparkling fizz rising in a golden flute." index={48}><ChampagneBubbles /></LoaderCard>
          <LoaderCard title="Northern Lights" description="Ethereal cosmic aurora ribbons waving across the sky." index={49}><NorthernLights /></LoaderCard>

          {/* BONUS Loaders 51-60 */}
          <LoaderCard title="Bitcoin Mine" description="Crypto mining simulation with rhythmic pickaxe strikes." index={50}><BitcoinMine /></LoaderCard>
          <LoaderCard title="ECG Monitor" description="Clinical heart rate visualization with rhythmic spikes." index={51}><ECGMonitor /></LoaderCard>
          <LoaderCard title="Popcorn Pop" description="Bouncy snack-time physics with randomized popping." index={52}><PopcornPop /></LoaderCard>
          <LoaderCard title="Moon Phases" description="Cosmic lunar transformation cycle with subtle glow." index={53}><MoonPhases /></LoaderCard>
          <LoaderCard title="Rubik Snake" description="Interlocking segments twisting in a 3D chain." index={54}><RubikSnake /></LoaderCard>
          <LoaderCard title="Spotify EQ" description="Modern audio equalizer inspired by sleek streaming UI." index={55}><SpotifyEQ /></LoaderCard>
          <LoaderCard title="Fidget Spinner" description="High-speed kinetic toy simulation with motion physics." index={56}><FidgetSpinner /></LoaderCard>
          <LoaderCard title="Among Us Walk" description="Playful suspicious character walking across space." index={57}><AmongUsWalk /></LoaderCard>
          <LoaderCard title="Pokéball Open" description="Anime-inspired capturing sequence with light burst." index={58}><PokeballOpen /></LoaderCard>
          <LoaderCard title="TikTok Glitch" description="Social-media chromatic aberration and digital glitching." index={59}><TikTokGlitch /></LoaderCard>
        </main>

        {/* Footer */}
        <footer className="mt-24 text-center border-t border-slate-800 pt-12 pb-8">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Premium UI Lab. Ultimate 60 Loader Collection.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
