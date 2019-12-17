window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth
    timer =this.setTimeout(generateImage,100)


}
function downLoad(e){
    var canvas = document.getElementById("canvas");  
    let imgUrl = canvas.toDataURL('image/jpeg');   //需要用服务启动http-server
   console.log(imgUrl);
}

function generateImage() {
    const _this = this;
    var canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    let avatarFlag, backImgFlag, codeImgFlag;
    // 图片加载顺序： 背景图 -> 二维码 -> 用户头像
    let avatar = new Image;
    avatar.setAttribute('crossOrigin', 'anonymous');
    avatar.onload = function () {
        ctx.drawImage(avatar,295, 175, 25, 25);
        avatarFlag = true;
        canvas2Img();
    };
    // 二维码
    let codeImg = new Image;
    codeImg.onload = function () {
        ctx.drawImage(codeImg, 270, 150, 80, 80);
        codeImgFlag = true;
        avatar.src = "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK0CdhyuRVs0cib5WuzoojeogB4zCPXkSX0yDMvTVwgliboda4WW2ovakbzMictXUwrrhGmWO5qohvaw/132";

    };
    //添加背景图
    let backImg = new Image;
    backImg.onload = function () {
        ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
        backImgFlag = true;
        codeImg.src = "images/code.jpg"; 
    };
    backImg.src = "images/bg.jpg";

}
function canvas2Img(){
    var canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
     // 姓名
     ctx.font = "15px 微软雅黑 bold";
     ctx.fillStyle = "#039BE6";
     const nickname ="凉薄人丶";
     ctx.fillText(nickname, 288, 250);
}





