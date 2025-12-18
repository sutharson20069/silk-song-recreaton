import { ENEMY_STATES } from "../engine/constants";

export interface Enemy {
  x:number; y:number; vx:number;
  w:number; h:number;
  hp:number; maxHp:number;
  state:string; timer:number;
  pL:number; pR:number;
  facing:number; attackCd:number;
}