class Invader {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    move(direction: number) {
        this.x += direction;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = 'green';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}