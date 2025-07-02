class Bullet {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    move() {
        this.y -= this.speed;
    }

    draw(context) {
        context.fillStyle = 'yellow';
        context.fillRect(this.x, this.y, 2, 10);
    }
}