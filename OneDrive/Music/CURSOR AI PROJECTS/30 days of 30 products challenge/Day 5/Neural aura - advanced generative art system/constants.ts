
import { Config } from './types';

export const DEFAULT_CONFIG: Config = {
  particleCount: 2000,
  friction: 0.96,
  gravity: 0.0,
  attractionStrength: 1.2,
  repulsionStrength: 0.8,
  mouseRadius: 150,
  explosionForce: 25,
  trailAlpha: 0.08,
  showFPS: true,
  audioReactive: false,
  colorMode: 'velocity',
  renderMode: 'glow',
  text: 'RAVI',
};

export const COLORS = {
  electricBlue: '#00F0FF',
  neonPurple: '#B030FF',
  cyberLime: '#00FF80',
  magenta: '#FF0080',
  gold: '#FFD700',
};

export const PHYSICS = {
  MAX_FORCE: 0.5,
  MAX_VELOCITY: 15,
  MIN_DIST_REPULSION: 30,
  MAX_DIST_ATTRACTION: 150,
};
