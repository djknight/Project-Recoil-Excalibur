import * as ex from "excalibur";
import { Actor, Color, Engine, vec } from "excalibur";
import Config from "./config";
import { Shell } from "./projectiles/shell";
import { Resources } from "./resources";

export class Turret extends Actor {
  constructor() {
    super({
      pos: vec(150, 150),
      width: 100,
      height: 100,
    });
  }

  onInitialize(engine: Engine) {
    this.graphics.add(Resources.top.toSprite());

    engine.input.pointers.primary.on("down", (evt) => {
      const shell = new Shell(
        this.pos.clone(),
        ex.Vector.fromAngle(this.rotation).scale(Config.shellSpeed)
      );
      shell.rotation = this.rotation;
      engine.add(shell);
    });
  }
  //mouse click
  onPreUpdate(engine: Engine): void {
    this.rotation = engine.input.pointers.primary.lastWorldPos

      .sub(this.pos)
      .toAngle();
  }
}
