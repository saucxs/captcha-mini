/**
 * Created by saucxs on 2019/3/1.
 */

function Captcha(params = {}) {
    let middleParams = Object.assign({
        lineWidth: 0.5,   //线条宽度
        lineNum: 2,       //线条数量
        dotR: 1,          //点的半径
        dotNum: 15,       //点的数量
        preGroundColor: [10, 80],    //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 20,           //字体大小
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'],  //字体类型
        fontStyle: 'fill',      //字体绘制方法，有fill和stroke
        content: 'acdefhijkmnpwxyABCDEFGHJKMNPQWXY12345789',  //验证码内容
        length: 4    //验证码长度
    }, params);
    Object.keys(middleParams).forEach(item => {
        this[item] = middleParams[item];
    });
    this.canvas = null;
    this.paint = null;
};

/*Captcha的原型上绑定方法
* 获取区间的随机数
* params []*/
Captcha.prototype.getRandom = function (...arr) {
    arr.sort((a,b) => a - b);
    return Math.floor(Math.random() * (arr[1] - arr[0]) + arr[0]);
};

/*Captcha的原型上绑定方法
* 获取随机颜色
* params []*/
Captcha.prototype.getColor = function (arr) {
    let colors = new Array(3).fill('');
    colors = colors.map(item => this.getRandom(...arr));
    return colors
};

/*Captcha的原型上绑定方法
* 获取验证码*/
Captcha.prototype.getText = function () {
    let length = this.content.length;
    let str = '';
    for (let i = 0;i < this.length; i++) {
        str += this.content[this.getRandom(0, length)];
    }
    return str;
};

/*Captcha的原型上绑定方法
* 绘制线条*/
Captcha.prototype.line = function () {
    for (let i = 0;i < this.lineNum; i++) {
        /*随机获取线条的起始位置*/
        let x = this.getRandom(0, this.canvas.width);
        let y = this.getRandom(0, this.canvas.height);
        let endX = this.getRandom(0, this.canvas.width);
        let endY = this.getRandom(0, this.canvas.height);

        this.paint.beginPath();
        this.paint.lineWidth = this.lineWidth;

        /*获取颜色路径*/
        let colors = this.getColor(this.preGroundColor);
        this.paint.strokeStyle = 'rgba(' + colors[0] + ',' + colors[1] + ',' + colors[2] + ',' + '0.8)';

        /*绘制路径*/
        this.paint.moveTo(x, y);
        this.paint.lineTo(endX, endY);
        this.paint.closePath();
        this.paint.stroke();
    }
};

/*Captcha的原型上绑定方法
* 绘制圆点*/
Captcha.prototype.circle = function () {
    for (let i = 0; i < this.dotNum; i++) {
        /*随机获取圆心*/
        let x = this.getRandom(0, this.canvas.width);
        let y = this.getRandom(0, this.canvas.height);
        this.paint.beginPath();
        /*绘制圆*/
        this.paint.arc(x, y, this.dotR, 0, Math.PI * 2, false);
        this.paint.closePath();
        /*随机获取路径颜色*/
        let colors = this.getColor(this.preGroundColor);
        this.paint.fillStyle = 'rgba(' + colors[0] + ',' + colors[1] + ',' + colors[2] + ',' + '0.8)';
        /*绘制*/
        this.paint.fill();
    }
};


/*Captcha的原型上绑定方法
* 绘制文字*/
Captcha.prototype.font = function () {
  let str = this.getText();
  this.callback(str);
  /*指定文字风格*/
    this.paint.font = this.fontSize + 'px ' + this.fontFamily[this.getRandom(0, this.fontFamily.length)];
    this.paint.textBaseline = 'middle';
    /*指定文字绘制风格*/
    let fontStyle = this.fontStyle + 'Text';
    let colorStyle = this.fontStyle + 'Style';
    for (let i = 0; i < this.length; i++) {
        let fontWidth = this.paint.measureText(str[i]).width;
        let x = this.getRandom(this.canvas.width / this.length * i + 0.2 * fontWidth, (this.canvas.width / this.length) * i + 0.5 * fontWidth);
        /*随机获取字体的旋转角度*/
        let deg = this.getRandom(-6, 6);
        /*随机获取文字颜色*/
        let colors = this.getColor(this.preGroundColor);
        this.paint[colorStyle] = 'rgba(' + colors[0] + ',' + colors[1] + ',' + colors[2] + ',' + '0.8)';
        /*开始绘制*/
        this.paint.save();
        this.paint.rotate(deg * Math.PI / 180);
        this.paint[fontStyle](str[i], x, this.canvas.height / 2);
        this.paint.restore();

    }
};

/*Captcha的原型上绑定方法
* 绘制图形*/
Captcha.prototype.draw = function (dom, callback = function () {}) {
    /*获取canvas的dom*/
    if (!this.paint) {
        this.canvas = dom;
        if (!this.canvas) return ;
        else this.paint = this.canvas.getContext('2d');
        /*回调函数赋值给this*/
        this.callback = callback;
        this.canvas.onclick = () => {
            this.drawAgain();
        }
    }
    /*随机画布颜色，使用背景色*/
    let colors = this.getColor(this.backGroundColor);
    this.paint.fillStyle = 'rgba(' + colors[0] + ',' + colors[1] + ',' + colors[2] + ',' + '0.8)';

    /*绘制画布*/
    this.paint.fillRect(0, 0, this.canvas.width, this.canvas.height);

    /*绘图*/
    this.circle();
    this.line();
    this.font();
};

/*Captcha的原型上绑定方法
* 清空画布*/
Captcha.prototype.clear = function () {
    this.paint.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

/*Captcha的原型上绑定方法
* 重新绘制*/
Captcha.prototype.drawAgain = function () {
    this.clear();
    this.draw(this.callbak);
};

if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
    module.exports = Captcha;
}
