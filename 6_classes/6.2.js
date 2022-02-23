class Rectangle {
    constructor(topLeftXPos,topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle){
        if (this.topLeftXPos + this.width >=  otherRectangle.topLeftXPos && this.topLeftXPos + this.width <= otherRectangle.topLeftXPos + otherRectangle.width && this.topLeftYPos + this.length >= otherRectangle.topLeftYPos && this.topLeftYPos + this.length <= otherRectangle.topLeftYPos + this.length) {
                return true;
         }else if(this.topLeftXPos >= otherRectangle.topLeftXPos && this.topLeftXPos <= otherRectangle.topLeftXPos + otherRectangle.width && this.topLeftYPos >= otherRectangle.topLeftYPos && this.topLeftYPos <= otherRectangle.topLeftYPos + otherRectangle.length){
             return true;
         }else{
             return false;
         }
    }
}
let rectun = new Rectangle (5,7,4,3);
let rectwo = new Rectangle (5,3,4,6);

console.log(rectun.collides(rectwo));