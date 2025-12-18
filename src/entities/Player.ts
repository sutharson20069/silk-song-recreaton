export interface Player {
  x:number; y:number; vx:number; vy:number;
  w:number; h:number;
  hp:number; maxHp:number;
  grounded:boolean; facing:number;
  attacking:boolean; attackFrame:number;
  dashCd:number; invuln:number;
}

export const createPlayer = (): Player => ({
  x:100, y:300, vx:0, vy:0,
  w:24, h:36,
  hp:5, maxHp:5,
  grounded:false, facing:1,
  attacking:false, attackFrame:0,
  dashCd:0, invuln:0
});