"use strict";

import { Game } from "https://games-sdk.lmg-software-ag.de/scripts/sdk-platform.js";

const game = new Game();

game.placeObstacle(385, 600);
game.placeObstacle(200, 700);
game.placeObstacle(700, 300, "type2");
game.placePlatform(0, 600, 300, 2000);
game.placePlatform(500, 600, 300, 2000);
game.placePlatform(1000, 600, 300, 2000);
game.placePlatform(1500, 600, 300, 2000);
game.placeHazard(300, 900);
game.placeHazard(350, 900);
game.placeHazard(400, 900);
game.placeHazard(450, 900);
game.setupPlayerCharacter( 100, 100, 5, 300, {
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
