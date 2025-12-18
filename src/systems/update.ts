import { Player } from "../entities/Player";
import { Boss } from "../entities/Boss";

export function updateBoss(boss:Boss, player:Player) {
  boss.timer++;
  if (boss.hp < boss.maxHp * 0.5) boss.phase = 2;
  if (boss.hp < boss.maxHp * 0.25) boss.phase = 3;

  if (boss.phase === 2 && boss.timer % 60 === 0) {
    boss.x += boss.x < player.x ? 60 : -60;
  }
}