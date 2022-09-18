import { Actor, Color, DisplayMode, Engine, Loader } from "excalibur";
import { vector } from "excalibur/build/dist/Util/DrawUtil";
import { Player } from "./player";
import { Turret } from "./turret";
import { Resources } from "./resources";

class Game extends Engine {
  constructor() {
    super({ width: 1200, height: 600 });
  }
  initialize() {
    const player = new Player();
    this.add(player);

    const loader = new Loader([Resources.top, Resources.body]);

    this.start(loader);
  }
}

export const game = new Game();
game.initialize();
