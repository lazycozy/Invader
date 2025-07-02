// This file is the entry point of the application. It initializes the game and starts the game loop.

import { GameEngine } from './game/GameEngine';

const gameEngine = new GameEngine();
gameEngine.start();