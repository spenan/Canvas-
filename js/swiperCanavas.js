var canvas1 = document.querySelector(".canvas1");
const ctx = canvas1.getContext('2d');
var canvas2 = document.querySelector(".canvas2");
const ctx2 = canvas2.getContext('2d');
var canvas3 = document.querySelector(".canvas3");
const ctx3 = canvas3.getContext('2d');
window.onload = function () {
    var canvas=$("canvas");
    console.log(canvas);
    for(var i=0;i<canvas.length;i++){
        var temp=$(".swiper-slide");
        canvas[i].height=temp[0].offsetHeight
        canvas[i].width =temp[0].swiperSlideSize;
        
    }
    generateImage();
}
function generateImage() {
    let codeImg = new Image;
    codeImg.onload = function () {
        ctx.drawImage(codeImg, 140, 80, 30, 30);
    };
    codeImg.src = "images/code.jpg"; 

    let codeImg2 = new Image;
    codeImg2.onload = function () {
        ctx2.drawImage(codeImg2, 140, 100, 30, 30);
    };
    codeImg2.src = "images/code.jpg"; 


    let codeImg3 = new Image;
    codeImg3.onload = function () {
        ctx3.drawImage(codeImg3, 20, 95, 30, 30);
    };
    codeImg3.src = "images/code.jpg"; 
}