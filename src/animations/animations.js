import gsap from "gsap";

export default class Animations {

    static exitAnimation(direction, element, duration, delay, ease) {
        let pos = {}
        switch (direction) {
            case Direction.Up:
                pos = { y: "100%" }
                break;
            case Direction.Down:
                pos = { y: "-100%" }
                break;
            case Direction.Left:
                pos = { x: "100%" }
                break;
            case Direction.Right:
                pos = { x: "-100%" }
                break;
            default:
                break;
        }

        gsap.to(element, {
            delay: delay,
            duration: duration,
            ease: ease,
            ...pos
        });
    }

    static appearAnimation(direction, element, duration, delay, ease) {
        let posStart = {}
        let posEnd = {}
        switch (direction) {
            case Direction.Up:
                posStart = { y: "100%" }
                posEnd = { y: "0%" }
                break;
            case Direction.Down:
                posStart = { y: "-100%" }
                posEnd = { y: "0%" }
                break;
            case Direction.Left:
                posStart = { x: "100%" }
                posEnd = { x: "0%" }
                break;
            case Direction.Right:
                posStart = { x: "-100%" }
                posEnd = { x: "0%" }
                break;
            default:
                break;
        }
        gsap.set(element, {
            ...posStart,
        });
        gsap.to(element, {
            delay: delay,
            duration: duration,
            ease: ease,
            ...posEnd
        });
    }
}

export class Direction {
    static Up = new Direction('Up');
    static Down = new Direction('Down');
    static Left = new Direction('Left');
    static Right = new Direction('Right');

    constructor(name) {
        this.name = name;
    }
    toString() {
        return `Direction.${this.name}`;
    }
}
