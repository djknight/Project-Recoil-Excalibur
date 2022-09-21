import * as ex from "excalibur";
import { TiledMapResource } from "@excaliburjs/plugin-tiled";

const game = new ex.Engine();
const map = new TiledMapResource("/static/map.json");
const loader = new ex.Loader([map]);

game.start(loader).then(() => {
  //var tm = map.getTileMap(); state the tile map png
  // game.add(tm); tm is tile map
});

// the website docs

// import * as ex from "excalibur";
// import { TiledMapResource } from "@excaliburjs/plugin-tiled";

// // Create tiled map resource, pointing to static asset path
// const tiledMap = new TiledMapResource("/assets/map.tmx");

// // Create a loader and reference the map
// const loader = new ex.Loader([tiledMap]);

// // Start the game (starts the loader)
// game.start(loader).then(function () {
//   console.log("Game loaded");
//   tiledMap.addTiledMapToScene(game.currentScene);
// });
