import { ImageSource } from "excalibur";
import body from "./images/body.png"; // for parcelv2 this is configured in the .parcelrc
import top from "./images/top.png"; // for parcelv2 this is configured in the .parcelrc
import shellBlue from "./images/shellBlue.png"; // for parcelv2 this is configured in the .parcelrc

let Resources = {
  body: new ImageSource(body),
  top: new ImageSource(top),
  shellBlue: new ImageSource(shellBlue),
};

export { Resources };
