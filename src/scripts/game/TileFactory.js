import { App } from "../system/App";
import { Tools } from "../system/Tools";
import { Tile } from "./Tile";


export class TileFactory {
    static generate() {
        const fruit = App.config.props[Tools.randomNumber(0, App.config.props.length - 1)];
        return new Tile(fruit);
    }
}
