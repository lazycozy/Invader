import { Player } from './Player';
import { Invader } from './Invader';

export class GameEngine {
    invaders: Invader[];
    player: Player | null;
    bullets: any[];
    isRunning: boolean;

    constructor() {
        this.invaders = [];
        this.player = null;
        this.bullets = [];
        this.isRunning = false;
    }

    start() {
        this.initializeGame();
        this.isRunning = true;
        this.gameLoop();
    }

    initializeGame() {
        // Initialize player and invaders
        this.player = new Player(100, 400, 50, 30);
        this.createInvaders();
    }

    createInvaders() {
        // Invaderのコンストラクタに必要な4つの引数を渡す
        for (let i = 0; i < 5; i++) {
            this.invaders.push(new Invader(i * 50, 0, 40, 30));
        }
    }

    update() {
        // Update player, bullets, and invaders
        // Player.moveにはdirectionが必要なので仮で'left'を渡す
        if (this.player) this.player.move('left');
        this.bullets.forEach(bullet => bullet.move && bullet.move());
        this.invaders.forEach(invader => invader.move && invader.move(1));
    }

    render() {
        // Clear the screen and draw player, bullets, and invaders
        this.clearScreen();
        // Player.drawにはcontextが必要なので仮のnullを渡す
        if (this.player) this.player.draw && this.player.draw(this.context);
        this.bullets.forEach(bullet => bullet.draw && bullet.draw(this.context));
        this.invaders.forEach(invader => invader.draw && invader.draw(this.context));
    }

    clearScreen() {
        // Logic to clear the game screen
    }

    gameLoop() {
        if (this.isRunning) {
            this.update();
            this.render();
            // requestAnimationFrameが未定義の場合はsetTimeoutで代用
            if (typeof requestAnimationFrame !== 'undefined') {
                requestAnimationFrame(() => this.gameLoop());
            } else {
                setTimeout(() => this.gameLoop(), 16);
            }
        }
    }
}