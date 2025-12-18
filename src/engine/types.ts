export interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number;
  color: string;
  gravity?: number;
}