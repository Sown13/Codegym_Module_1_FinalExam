class Rectangle {
    constructor(width, height) {
        this.myWidth = width;
        this.myHeight = height;
    }

    // set makeWidth(widthValue) {
    //     this.myWidth = widthValue;
    // }
    //
    // set makeHeight(heightValue) {
    //     this.myHeight = heightValue;
    // }

    get showWidth() {
        return this.myWidth
    }

    get showHeight() {
        return this.myHeight
    }
    render(width,height){
        let image = document.getElementById("myCanvas");
        let ctx = image.getContext("2d");
        ctx.fillStyle = '#000000';
        ctx.moveTo(10,10);
        ctx.lineTo(10, myRectangle.showHeight);
        ctx.lineTo(width,height);
        ctx.lineTo(myRectangle.showWidth,10);
        ctx.lineTo(10,10);
        ctx.fillRect(10,10,width,height);
        ctx.stroke();
    }
}
let myRectangle = new Rectangle(200,100);
myRectangle.render(200,100);
