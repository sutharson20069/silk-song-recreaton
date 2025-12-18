export interface Boss {
  x:number; y:number;
  w:number; h:number;
  hp:number; maxHp:number;
  phase:number;
  timer:number;
}
export const createBoss = (): Boss => ({
  x:520, y:260, w:120, h:80,
  hp:50, maxHp:50,
  phase:1, timer:0
});