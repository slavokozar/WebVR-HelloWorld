class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Pacman {
    constructor(position) {
        this.position = position;
        this.diameter = 50;
        this.angle = 38;
    }

    render(context) {
        context.beginPath();

        context.moveTo(
            this.position.x,
            this.position.y
        );

        context.lineTo(
            this.position.x + Math.cos(this.angle * Math.PI / 180) * this.diameter,
            this.position.y + Math.sin(this.angle * Math.PI / 180) * this.diameter
        );

        context.moveTo(
            this.position.x,
            this.position.y
        );

        context.lineTo(
            this.position.x + Math.cos(-1 * this.angle * Math.PI / 180) * this.diameter,
            this.position.y + Math.sin(-1 * this.angle * Math.PI / 180) * this.diameter
        );

        context.arc(
            this.position.x,
            this.position.y,
            this.diameter,
            (360 - this.angle) * Math.PI / 180,
            this.angle * Math.PI / 180,
            true
        );

        context.fill();
    }

    update(delta) {
        this.position.x += delta.x;
        this.position.y += delta.y;
    }
}


const scene = document.getElementById('scene');

const ctx = scene.getContext('2d');

const pacman = new Pacman(
    new Vector2(250, 250)
);


let timeLast = null;

pacman.render(ctx);


// function loop(time) {
//     ctx.clearRect(0, 0, scene.width, scene.height);
//
//     if (timeLast)
//         pacman.update(new Vector2(0, (timeLast - time) / 100));
//
//     timeLast = time;
//     pacman.render(ctx);
//
//
//     requestAnimationFrame(loop);
// }
//
//
//
//
// requestAnimationFrame(loop);


