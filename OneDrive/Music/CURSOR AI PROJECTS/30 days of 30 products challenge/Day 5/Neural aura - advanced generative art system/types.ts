
export interface Point {
  x: number;
  y: number;
}

export interface Config {
  particleCount: number;
  friction: number;
  gravity: number;
  attractionStrength: number;
  repulsionStrength: number;
  mouseRadius: number;
  explosionForce: number;
  trailAlpha: number;
  showFPS: boolean;
  audioReactive: boolean;
  colorMode: 'velocity' | 'proximity' | 'rainbow' | 'monochrome';
  renderMode: 'glow' | 'points' | 'lines';
  text: string;
}

export interface ParticleState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  ax: number;
  ay: number;
  mass: number;
  size: number;
  hue: number;
  targetX?: number;
  targetY?: number;
  isTextParticle: boolean;
  id: number;
}
