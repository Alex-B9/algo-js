class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    get surface() {
        return Math.PI * (this.radius * this.radius);
    }
    move(xOffset, yOffset) {
        this.xPos = xOffset;
        this.yPos = yOffset;
    }
}
let circle1 = new Circle(1,1,35);
circle1.move(3,3)
console.log(circle1.surface);