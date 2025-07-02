class GameEngine {
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
        this.player = new Player();
        this.createInvaders();
    }

    createInvaders() {
        // Create invaders and add them to the invaders array
        for (let i = 0; i < 5; i++) {
            this.invaders.push(new Invader(i * 50, 0));
        }
    }

    update() {
        // Update player, bullets, and invaders
        this.player.move();
        this.bullets.forEach(bullet => bullet.move());
        this.invaders.forEach(invader => invader.move());
    }

    render() {
        // Clear the screen and draw player, bullets, and invaders
        this.clearScreen();
        this.player.draw();
        this.bullets.forEach(bullet => bullet.draw());
        this.invaders.forEach(invader => invader.draw());
    }

    clearScreen() {
        // Logic to clear the game screen
    }

    gameLoop() {
        if (this.isRunning) {
            this.update();
            this.render();
            requestAnimationFrame(() => this.gameLoop());
        }
    }
}