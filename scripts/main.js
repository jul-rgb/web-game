"use strict";

import { Game } from "https://games-sdk.lmg-software-ag.de/scripts/sdk-platform.js";

const game = new Game();

game.placeObstacle(200, 100
);
game.placeObstacle(700, 300, "type2");
game.placePlatform(100, 300, 300, 20);
game.placeHazard(500, 500);
game.setupPlayerCharacter(100, 100, 5, 300);

window.addEventListener("playerDestroyed", (event) => {
    alert("Player character destroyed!");
    game.stop();
});

window.addEventListener("playerFallenToDeath", (event) => {
    alert("Player character has fallen to death!");
    game.stop();
});

game.run();
