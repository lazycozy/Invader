export class Bullet {
    x: number;
    y: number;
    speed: number;

    constructor(x: number, y: number, speed: number) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    move() {
        this.y -= this.speed;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = 'yellow';
        context.fillRect(this.x, this.y, 2, 10);
    }
}