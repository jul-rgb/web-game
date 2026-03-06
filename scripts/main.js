"use strict";

import { Game } from "https://games-sdk.lmg-software-ag.de/scripts/sdk-platform.js";

const game = new Game();

game.placeObstacle(50, 900);
game.placeObstacle(50, 850);
game.placeObstacle(0, 300, "type2");
game.placePlatform(0, 1000, 300, 2000);
game.placePlatform(15, 850, 100, 20);
game.placePlatform(500, 1000, 300, 2000);
game.placePlatform(1000, 1000, 300, 2000);
game.placePlatform(1500, 1000, 300, 2000);
game.placeHazard(300, 1500);
game.placeHazard(350, 1500);
game.placeHazard(400, 1500);
game.placeHazard(450, 1500);
game.setupPlayerCharacter( 0, 0, 5, 300, {
   //showHitBoxFrame: true, 
    hitBoxWidth: 35, 
    hitBoxOffsetLeft: 45,
    hitBoxHeight: 110,
    hitBoxOffsetTop: 15,
}
);

window.addEventListener("playerDestroyed", (event) => {
    alert("                         Game Over                                                                                                                                                    Gefahr berührt");
    alert("Weiche Gefahren aus")
    game.stop();
    window.location.reload();
});

window.addEventListener("playerFallenToDeath", (event) => {
    alert("                         Game Over                                                                                                                                                       Fall ins Leere");
    alert("Falle nicht ins Leere");
    game.stop();
    window.location.reload();
});

game.run();
