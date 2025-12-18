import { Boss } from "../entities/Boss";
import { Player } from "../entities/Player";

export function drawBoss(ctx:CanvasRenderingContext2D, boss:Boss) {
  ctx.fillStyle = '#aa22ff';
  ctx.fillRect(boss.x, boss.y, boss.w, boss.h);

  ctx.fillStyle = '#000';
  ctx.fillRect(boss.x, boss.y-10, boss.w, 6);
  ctx.fillStyle = '#ff44ff';
  ctx.fillRect(boss.x, boss.y-10, (boss.hp/boss.maxHp)*boss.w, 6);
}

export function drawPlayer(ctx:CanvasRenderingContext2D, p:Player) {
  ctx.fillStyle = '#88ddff';
  ctx.fillRect(p.x, p.y, p.w, p.h);
}