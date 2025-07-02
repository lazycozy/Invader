import { Bullet } from './Bullet';

export class Player {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 5;
    }

    move(direction: 'left' | 'right') {
        if (direction === 'left') {
            this.x -= this.speed;
        } else if (direction === 'right') {
            this.x += this.speed;
        }
    }

    shoot() {
        // Bulletのコンストラクタは(x, y, speed)の3引数
        return new Bullet(this.x + this.width / 2, this.y, 10);
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}