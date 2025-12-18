import React, { useEffect, useRef } from "react";
import { CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_Y } from "./engine/constants";
import { createPlayer } from "./entities/Player";
import { createBoss } from "./entities/Boss";
import { drawBoss, drawPlayer } from "./systems/draw";
import { updateBoss } from "./systems/update";

export default function SilksongDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const game = useRef({
    player: createPlayer(),
    boss: createBoss()
  });

  useEffect(() => {
    const ctx = canvasRef.current!.getContext("2d")!;
    let id:number;

    const loop = () => {
      ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
      ctx.fillStyle = "#111";
      ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

      updateBoss(game.current.boss, game.current.player);
      drawPlayer(ctx, game.current.player);
      drawBoss(ctx, game.current.boss);

      id = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(id);
  }, []);

  return <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT}/>;
}