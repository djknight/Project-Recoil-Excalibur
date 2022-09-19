import * as ex from "excalibur";
import { Actor, Color, Engine, vec, Vector } from "excalibur";
import Config from "./config";
import { Resources } from "./resources";
import { Turret } from "./turret";
import { Shell } from "./projectiles/shell";

export class Player extends Actor {
  turret: Turret;
  constructor() {
    super({
      pos: vec(150, 150),
      width: 100,
      height: 100,
    });
  }

  onInitialize(engine: Engine) {
    this.turret = new Turret();
    engine.add(this.turret);

    this.graphics.add(Resources.body.toSprite());
  }

  onPreUpdate(engine: Engine): void {
    this.vel.x = 0;
    this.vel.y = 0;

    if (engine.input.keyboard.isHeld(ex.Input.Keys.W)) {
      this.vel = Vector.fromAngle(this.rotation).scale(150);
    }
    if (engine.input.keyboard.isHeld(ex.Input.Keys.D)) {
      this.rotation += 0.02;
    }
    if (engine.input.keyboard.isHeld(ex.Input.Keys.S)) {
      this.vel = Vector.fromAngle(this.rotation).scale(-50);
    }
    if (engine.input.keyboard.isHeld(ex.Input.Keys.A)) {
      this.rotation -= 0.02;
    }
  }
  onPostUpdate(_engine: ex.Engine, _delta: number): void {
    this.turret.pos = this.pos;
  }
}
