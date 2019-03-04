# captcha
`captcha.js`是一个生成验证码的插件，使用js和canvas生成的，确保后端服务被暴力攻击，简单判断人机以及系统的安全性，体积小，功能多，支持配置。

验证码插件内容，包含1、验证码插件-使用，2、验证码插件栗子，3、API介绍，4、支持浏览器

注意：基于本项目源码从事科研、论文、系统开发，"最好"在文中或系统中表明来自于本项目的内容和创意，否则所有贡献者可能会鄙视你和你的项目。 使用本项目源码请尊重程序员职业和劳动

## 1、功能
+ 版本v 1.0.0
    - 1、支持随机字符内容配置，字符大小配置，字符类型配置，字符绘制方式配置，字符长度配置等
    - 2、支持点位置随机，数量配置，点半径的配置
    - 2、支持线条位置随机，宽度配置，线条数量的配置
    - 3、支持随机前景色配置，区间值[0, 255]，可以使用默认值
    - 4、支持随机背景色配置,区间值[0, 255]，可以使用默认值
    - 5、支持点击更新视图
    - 5、支持浏览器谷歌浏览器，火狐浏览器，Safari，IE10+等

## 2、验证码插件-使用

不依赖与其他的插件，实现起来很容易，`captcha.js`是必须要引进的组件

### 2.1 本地引入封装的js文件

第一步：获取组件方式：`git clone https://github.com/saucxs/captcha.git`

第二步：clone后，在需要加验证码的相关页面引入验证码文件"captcha.js"以及准备好装验证码容器:
引入captcha内容
```js
<script type="text/javascript" src="./captcha.js"></script>
```

装验证码的容器
```html
<canvas width="240" height="90" id="captcha1"></canvas>
```
第三步：在确保页面DOM加载完毕之后，调用captcha的draw方法(手动加载):
```js
 /*不传值，统一走默认值*/
    let captcha1 = new Captcha();
    captcha1.draw(document.querySelector('#captcha1'), r => {
        console.log(r, '验证码1');
    });
```
```js
/*传值,参数配置值，选择性配置*/
    let captcha2 = new Captcha({
        lineWidth: 1,   //线条宽度
        lineNum: 6,       //线条数量
        dotR: 2,          //点的半径
        dotNum: 25,       //点的数量
        preGroundColor: [10, 80],    //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 30,           //字体大小
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'],  //字体类型
        fontStyle: 'stroke',      //字体绘制方法，有fill和stroke
        content: '一个验证码abcdefghijklmnopqrstuvw生成的插件使用的是canvas显示',  //验证码内容
        length: 6    //验证码长度
    }); 
    captcha2.draw(document.querySelector('#captcha2'), r => {
        console.log(r, '验证码2');
    });
```

使用插件的效果地址1：https://www.mwcxs.top/static/testTool/demo/index.html

### 2.2 npm包引入

第一步：npm获取验证码组件： 
````
npm install captcha-mini
````
第二步：引入验证码模块：
````
import Captcha from 'captcha-mini'
或者
var Captcha = require("captcha-mini")
````
第三步：在确保页面DOM加载完毕之后，调用captcha的draw方法(手动加载):
```js
 /*不传值，统一走默认值*/
    let captcha1 = new Captcha();
    captcha1.draw(document.querySelector('#captcha1'), r => {
        console.log(r, '验证码1');
    });
```
```js
/*传值,参数配置值，选择性配置*/
    let captcha2 = new Captcha({
        lineWidth: 1,   //线条宽度
        lineNum: 6,       //线条数量
        dotR: 2,          //点的半径
        dotNum: 25,       //点的数量
        preGroundColor: [10, 80],    //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 30,           //字体大小
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'],  //字体类型
        fontStyle: 'stroke',      //字体绘制方法，有fill和stroke
        content: '一个验证码abcdefghijklmnopqrstuvw生成的插件使用的是canvas显示',  //验证码内容
        length: 6    //验证码长度
    }); 
    captcha2.draw(document.querySelector('#captcha2'), r => {
        console.log(r, '验证码2');
    });
```

