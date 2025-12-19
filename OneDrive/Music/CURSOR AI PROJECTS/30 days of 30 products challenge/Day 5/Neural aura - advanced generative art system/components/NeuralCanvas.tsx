
import React, { useEffect, useRef, useCallback } from 'react';
import { Config, ParticleState, Point } from '../types';
import { PHYSICS } from '../constants';

interface NeuralCanvasProps {
  config: Config;
  onFpsUpdate: (fps: number) => void;
}

class Particle implements ParticleState {
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
  initialHue: number;

  constructor(id: number, width: number, height: number) {
    this.id = id;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 4;
    this.vy = (Math.random() - 0.5) * 4;
    this.ax = 0;
    this.ay = 0;
    this.mass = 0.5 + Math.random() * 1.5;
    this.size = 1 + Math.random() * 3;
    this.isTextParticle = false;
    this.initialHue = (id * 0.1) % 360;
    this.hue = this.initialHue;
  }

  update(config: Config, mouse: Point, isMouseDown: boolean, audioLevel: number) {
    // Basic Physics
    this.vx += this.ax;
    this.vy += this.ay;
    
    // Friction
    this.vx *= config.friction;
    this.vy *= config.friction;
    
    // Gravity
    this.vy += config.gravity;

    // Limit Velocity
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > PHYSICS.MAX_VELOCITY) {
      const ratio = PHYSICS.MAX_VELOCITY / speed;
      this.vx *= ratio;
      this.vy *= ratio;
    }

    this.x += this.vx;
    this.y += this.vy;

    // Reset Acceleration
    this.ax = 0;
    this.ay = 0;

    // Text Targeting logic
    if (this.isTextParticle && this.targetX !== undefined && this.targetY !== undefined) {
      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Gentle spring-like pull towards text position
      if (dist > 1) {
        this.ax += (dx / dist) * 0.4;
        this.ay += (dy / dist) * 0.4;
        this.vx *= 0.92; // extra damping for text particles
        this.vy *= 0.92;
      }
    }

    // Interaction with Mouse
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < config.mouseRadius && dist > 1) {
      if (isMouseDown) {
        // Explosion
        const force = config.explosionForce / (dist * 0.1);
        this.ax -= (dx / dist) * force;
        this.ay -= (dy / dist) * force;
      } else {
        // Attraction
        const force = (config.attractionStrength * 50) / (dist * dist + 50);
        this.ax += (dx / dist) * force * this.mass;
        this.ay += (dy / dist) * force * this.mass;
      }
    }

    // Audio Reactivity
    if (config.audioReactive) {
      const scale = 1 + audioLevel * 10;
      this.size = (1 + Math.random() * 2) * scale;
      this.hue = (this.initialHue + audioLevel * 1000) % 360;
    } else {
      // Normal Hue shifting
      if (config.colorMode === 'velocity') {
        this.hue = (this.initialHue + speed * 10) % 360;
      } else if (config.colorMode === 'proximity') {
        this.hue = (this.initialHue + (config.mouseRadius - dist) * 2) % 360;
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D, config: Config) {
    ctx.beginPath();
    const alpha = config.renderMode === 'glow' ? 0.8 : 1;
    ctx.fillStyle = `hsla(${this.hue}, 80%, 60%, ${alpha})`;
    
    if (config.renderMode === 'glow') {
      ctx.shadowBlur = this.size * 2;
      ctx.shadowColor = `hsla(${this.hue}, 80%, 60%, 0.5)`;
    } else {
      ctx.shadowBlur = 0;
    }
    
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const NeuralCanvas: React.FC<NeuralCanvasProps> = ({ config, onFpsUpdate }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textCanvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'));
  const particles = useRef<Particle[]>([]);
  const mouse = useRef<Point>({ x: -1000, y: -1000 });
  const isMouseDown = useRef(false);
  const audioContext = useRef<AudioContext | null>(null);
  const analyser = useRef<AnalyserNode | null>(null);
  const dataArray = useRef<Uint8Array | null>(null);
  const rafId = useRef<number>();
  const lastTime = useRef<number>(0);
  const frameCount = useRef<number>(0);
  const lastFpsUpdate = useRef<number>(0);

  const initParticles = useCallback((width: number, height: number) => {
    particles.current = Array.from({ length: config.particleCount }, (_, i) => new Particle(i, width, height));
    
    // Sample text positions
    const tCtx = textCanvasRef.current.getContext('2d', { willReadFrequently: true });
    if (!tCtx) return;

    tCtx.canvas.width = width;
    tCtx.canvas.height = height;
    tCtx.clearRect(0, 0, width, height);
    
    const fontSize = Math.min(width * 0.25, height * 0.4);
    tCtx.font = `black ${fontSize}px sans-serif`;
    tCtx.textAlign = 'center';
    tCtx.textBaseline = 'middle';
    tCtx.fillStyle = 'white';
    tCtx.fillText(config.text, width / 2, height / 2);

    const imageData = tCtx.getImageData(0, 0, width, height);
    const data = imageData.data;
    const textPositions: Point[] = [];
    
    // Increase step to not sample every pixel
    const step = 6; 
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        if (data[index] > 128) { // White pixel
          textPositions.push({ x, y });
        }
      }
    }

    // Assign text positions to some particles
    const shuffledPositions = textPositions.sort(() => Math.random() - 0.5);
    particles.current.forEach((p, i) => {
      if (i < shuffledPositions.length) {
        p.targetX = shuffledPositions[i].x;
        p.targetY = shuffledPositions[i].y;
        p.isTextParticle = true;
      } else {
        p.isTextParticle = false;
        p.targetX = undefined;
        p.targetY = undefined;
      }
    });

    // Release text formation after 4 seconds
    setTimeout(() => {
      particles.current.forEach(p => {
        p.isTextParticle = false;
        // Give them a little push to start floating
        p.vx += (Math.random() - 0.5) * 10;
        p.vy += (Math.random() - 0.5) * 10;
      });
    }, 4000);
  }, [config.particleCount, config.text]);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);
    
    initParticles(width, height);
  }, [initParticles]);

  const initAudio = useCallback(async () => {
    if (audioContext.current) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const source = audioContext.current.createMediaStreamSource(stream);
      analyser.current = audioContext.current.createAnalyser();
      analyser.current.fftSize = 256;
      source.connect(analyser.current);
      dataArray.current = new Uint8Array(analyser.current.frequencyBinCount);
    } catch (err) {
      console.warn('Audio permission denied or unavailable');
    }
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    if (config.audioReactive) initAudio();
    
    return () => {
      window.removeEventListener('resize', resize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [resize, config.audioReactive, initAudio]);

  const animate = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate FPS
    const deltaTime = time - lastTime.current;
    lastTime.current = time;
    frameCount.current++;
    if (time - lastFpsUpdate.current > 1000) {
      onFpsUpdate((frameCount.current * 1000) / (time - lastFpsUpdate.current));
      frameCount.current = 0;
      lastFpsUpdate.current = time;
    }

    // Motion Blur Trail Effect
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = `rgba(0, 0, 0, ${config.trailAlpha})`;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // Get Audio level
    let audioLevel = 0;
    if (config.audioReactive && analyser.current && dataArray.current) {
      analyser.current.getByteFrequencyData(dataArray.current);
      const sum = dataArray.current.reduce((a, b) => a + b, 0);
      audioLevel = sum / (dataArray.current.length * 255);
    }

    ctx.globalCompositeOperation = 'lighter';
    
    // Boundary checks & Wrap
    const w = window.innerWidth;
    const h = window.innerHeight;

    particles.current.forEach((p, i) => {
      p.update(config, mouse.current, isMouseDown.current, audioLevel);
      
      // Screen Wrap
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      // Draw lines to neighbors (expensive, only for low counts or specific mode)
      if (config.renderMode === 'lines' && i % 4 === 0) {
         for (let j = i + 1; j < Math.min(i + 5, particles.current.length); j++) {
           const p2 = particles.current[j];
           const dx = p.x - p2.x;
           const dy = p.y - p2.y;
           const distSq = dx * dx + dy * dy;
           if (distSq < 2500) {
             ctx.beginPath();
             ctx.strokeStyle = `hsla(${p.hue}, 80%, 60%, ${0.1 * (1 - Math.sqrt(distSq)/50)})`;
             ctx.moveTo(p.x, p.y);
             ctx.lineTo(p2.x, p2.y);
             ctx.stroke();
           }
         }
      }

      p.draw(ctx, config);
    });

    rafId.current = requestAnimationFrame(animate);
  }, [config, onFpsUpdate]);

  useEffect(() => {
    rafId.current = requestAnimationFrame(animate);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    mouse.current = { x: clientX, y: clientY };
  };

  const handleMouseOut = () => {
    mouse.current = { x: -1000, y: -1000 };
    isMouseDown.current = false;
  };

  const handleMouseDown = () => (isMouseDown.current = true);
  const handleMouseUp = () => (isMouseDown.current = false);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onMouseOut={handleMouseOut}
      className="cursor-crosshair"
    />
  );
};

export default NeuralCanvas;
