"use strict";
class Bomb extends HTMLElement {
    constructor() {
        super();
        this.posx = 0;
        this.posy = 0;
        let foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this);
        this.posx = Math.floor(Math.random() * window.innerWidth);
        this.posy = -200;
        this.addEventListener('click', event => {
            this.posy = -500;
        });
    }
    update() {
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`;
        let h = window.innerHeight;
        if (this.posy > h) {
            this.posy = 0;
        }
        this.posy++;
    }
}
window.customElements.define("bomb-component", Bomb);
class Car extends HTMLElement {
    constructor() {
        super();
        this.posx = 0;
        this.posy = 0;
        let foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this);
        this.posx = 1000;
        this.posy = 600;
    }
    update() {
        this.style.transform = `translate(${this.posx}px, ${this.posy}px)`;
        let w = window.innerWidth;
        console.log(w);
        if (this.posx > w) {
            this.posx = Math.floor(Math.random() * window.innerWidth - window.innerWidth);
        }
        this.posx++;
    }
}
window.customElements.define("car-component", Car);
class Game {
    constructor() {
        this.score = 1;
        this.destroyed = 0;
        this.bomb = [];
        this.textfield = document.getElementsByTagName("textfield")[0];
        this.statusbar = document.getElementsByTagName("bar")[0];
        this.bomb = [new Bomb(), new Bomb(), new Bomb(), new Bomb()];
        this.car = new Car();
        this.gameLoop();
    }
    gameLoop() {
        for (var i = 0, a = this.bomb; i < a.length; i++) {
            var b = a[i];
            b.update();
        }
        this.car.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    destroyBuilding() {
        this.destroyed++;
        console.log("buildings destroyed " + this.destroyed);
    }
    scorePoint() {
        this.score++;
        this.textfield.innerHTML = "Score: " + this.score;
    }
}
window.addEventListener("load", () => new Game());
class GameObject {
    constructor(posx, posy) {
        this.posx = posx;
        this.posy = posy;
    }
}
//# sourceMappingURL=main.js.map