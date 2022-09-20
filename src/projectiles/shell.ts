import ex, { Actor, KillEvent, Vector } from "excalibur";
import Config from "../config";
import { Resources } from "../resources";

export class Shell extends Actor {
  constructor(pos: Vector, vel: Vector) {
    super({
      pos,
      vel,
      //using the config
      width: Config.bulletSize,
      height: Config.bulletSize,
    });
  }
  onInitialize() {
    this.graphics.add(Resources.shellBlue.toSprite());
    setTimeout(() => this.kill(), 1000);
    setTimeout(() => this.kill(), Config.setTimeout);
  }
}
