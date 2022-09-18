import * as ex from "excalibur";
import { Actor, Color, Engine, vec } from "excalibur";
import { Resources } from "./resources";

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(150, 150),
      width: 100,
      height: 100,
    });
  }

  onInitialize() {
    // only the img

    this.graphics.add(Resources.body.toSprite());
    this.graphics.add(Resources.top.toSprite());
  }

  onPreUpdate(engine: Engine): void {
    this.rotation = engine.input.pointers.primary.lastWorldPos
      .sub(this.pos)
      .toAngle();

    this.vel.x = 0;
    this.vel.y = 0;

    if (engine.input.keyboard.isHeld(ex.Input.Keys.W)) {
      this.vel.y = -150;
    }
    if (engine.input.keyboard.isHeld(ex.Input.Keys.D)) {
      this.vel.x = 150;
    }
    if (engine.input.keyboard.isHeld(ex.Input.Keys.S)) {
      this.vel.y = 150;
    }
    if (engine.input.keyboard.isHeld(ex.Input.Keys.A)) {
      this.vel.x = -150;
    }
  }
}
