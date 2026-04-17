"use strict";

import { Game } from "https://games-sdk.lmg-software-ag.de/scripts/sdk-platform.js";

const game = new Game();
//Spawnpunkt
game.setupPlayerCharacter( 0, -100, 5, 300, {
   //showHitBoxFrame: true, 
    hitBoxWidth: 35, 
    hitBoxOffsetLeft: 45,
    hitBoxHeight: 110,
    hitBoxOffsetTop: 15,
});
//Pilz-Plattform
game.placeObstacle(50, 900, "Type2");
game.placeObstacle(50, 850, "Type2");
game.placePlatform(15, 850, 100, 20);

//Lücken-Hindernis
game.placeObstacle(1100, 910);
game.placeObstacle(1100, 650);
game.placePlatform(1000, 1000, 300, 2000);

//Großer Abstand
game.placeObstacle(1500, 1000);
game.placeObstacle(1700, 1000);
game.placeObstacle(1900, 1000);

//Weg nach oben
game.placeObstacle(2100, 910);
game.placeObstacle(2200, 820);
game.placePlatform(2300, 730, 100, 20);
game.placePlatform(2460, 800, 100, 20);
game.placeObstacle(2100, 640);
game.placePlatform(1800, 640, 100, 20);
game.placeHazard(2180, 975);
game.placeHazard(2130, 975);
game.placePlatform(2000, 1000, 300, 2000);

//Start-Plattform
game.placePlatform(0, 1000, 300, 2000);

//Erster Sprung
game.placePlatform(500, 1000, 300, 2000);

//Erste Gefahren
game.placeHazard(300, 1500);
game.placeHazard(350, 1500);
game.placeHazard(400, 1500);
game.placeHazard(450, 1500);

//Gefahren-Feld
game.placeObstacle(2350, 900);
game.placeObstacle(2500, 950);
game.placeObstacle(2650, 875);
game.placeObstacle(2650, 900);
game.placeObstacle(2800, 950, "type2");
game.placePlatform(2780, 950, 50, 10);
game.placeObstacle(2900, 800, "type2");
game.placePlatform(2880, 800, 50, 10);
//Gefahren-Boden
game.placeHazard(2300, 1000);
game.placeHazard(2350, 1000);
game.placeHazard(2400, 1000);
game.placeHazard(2450, 1000);
game.placeHazard(2500, 1000);
game.placeHazard(2550, 1000);
game.placeHazard(2600, 1000);
game.placeHazard(2650, 1000);
game.placeHazard(2700, 1000);
game.placeHazard(2750, 1000);
game.placeHazard(2800, 1000);
game.placeHazard(2850, 1000);
game.placeHazard(2900, 1000);
game.placeHazard(2950, 1000);



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
