import * as ex from "excalibur";
import { Actor, Color, Engine, vec } from "excalibur";
import { Resources } from "./resources";

export class Turret extends Actor {
  constructor() {
    super({
      pos: vec(150, 150),
      width: 100,
      height: 90,
    });
  }

  onInitialize() {
    this.graphics.add(Resources.top.toSprite());
  }

  onPreUpdate(engine: Engine): void {
    this.rotation = engine.input.pointers.primary.lastWorldPos
      .sub(this.pos)
      .toAngle();
  }
}
