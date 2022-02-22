class Rectangle {
    constructor(topLeftXPos,topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    generator(){
        let rect = [];
        for (let i = 0; i<1000; i++){
            rect[i]=new Rectangle(Math.floor(Math.random()*11), Math.floor(Math.random()*11),Math.floor(Math.random()*11),Math.floor(Math.random()*11));
        }
        return rect;
    }
    collides(otherRectangle){
        otherRectangle = [];
        otherRectangle = this.generator();
        otherRectangle.forEach(element => {
            console.log(element);
            if (this.topLeftXPos + this.width >=  element.topLeftXPos && this.topLeftXPos + this.width <= element.topLeftXPos + element.width && this.topLeftYPos + this.length >= element.topLeftYPos && this.topLeftYPos + this.length <= element.topLeftYPos + this.length) {
                console.log("true");
            }else if(this.topLeftXPos >= element.topLeftXPos && this.topLeftXPos <= element.topLeftXPos + element.width && this.topLeftYPos >= element.topLeftYPos && this.topLeftYPos <= element.topLeftYPos + element.length){
                console.log("true");
            }else{
                console.log("false");
            }
        });
    }
}
let rectun = new Rectangle(4,5,3,7);
rectun.collides();