import { Actor, Vector } from "excalibur";
import Config from "../config";
import { Resources } from "../resources";

export class Shell extends Actor {
  constructor(pos: Vector, vel: Vector) {
    super({
      pos,
      vel,
    });
  }

  onInitialize() {
    this.graphics.add(Resources.shellBlue.toSprite());
  }
}
