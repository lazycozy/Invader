class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 5;
    }

    move(direction) {
        if (direction === 'left') {
            this.x -= this.speed;
        } else if (direction === 'right') {
            this.x += this.speed;
        }
    }

    shoot() {
        return new Bullet(this.x + this.width / 2, this.y, 10, 10);
    }

    draw(context) {
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}