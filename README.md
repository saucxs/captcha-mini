# [captcha-mini](https://github.com/saucxs/captcha-mini)

[![](https://img.shields.io/badge/Powered%20by-saucxs%20-brightgreen.svg)](https://github.com/saucxs/watermark-dom)
[![GitHub license][license-image]][license-url]
[![GitHub version][version-image]][version-url]
[![GitHub stars][stars-image]][stars-url]
[![GitHub forks][forks-image]][forks-url]
[![GitHub issues][issues-image]][issues-image]
[![npm download][download-image]][download-url]

[license-image]: https://img.shields.io/github/license/saucxs/captcha-mini.svg
[license-url]: https://github.com/saucxs/captcha-mini/blob/master/LICENSE
[version-image]: https://img.shields.io/github/package-json/v/saucxs/captcha-mini.svg
[version-url]: https://github.com/saucxs/captcha-mini/blob/master/package-json
[stars-image]: https://img.shields.io/github/stars/saucxs/captcha-mini.svg
[stars-url]: https://github.com/saucxs/captcha-mini/stargazers
[forks-image]: https://img.shields.io/github/forks/saucxs/captcha-mini.svg
[forks-url]: https://github.com/saucxs/captcha-mini/network
[issues-image]: https://img.shields.io/github/issues/saucxs/captcha-mini.svg
[issues-url]: https://github.com/saucxs/captcha-mini/issues
[download-image]: https://img.shields.io/npm/dm/captcha-mini.svg
[download-url]: https://npmjs.org/package/captcha-mini

`captcha-mini.js`(~~之前叫captcha~~)是一个生成验证码的插件，使用js和canvas生成的，确保后端服务被暴力攻击，简单判断人机以及系统的安全性，体积小，功能多，支持配置。

验证码插件内容，包含1、功能，验证码插件-使用，2、验证码插件使用，3、支持浏览，4、其他

注意：基于本项目源码从事科研、论文、系统开发，"最好"在文中或系统中表明来自于本项目的内容和创意，否则所有贡献者可能会鄙视你和你的项目。 使用本项目源码请尊重程序员职业和劳动

## 1、功能
+ 版本v 1.0.0
    - 1、支持随机字符内容配置，字符大小配置，字符类型配置，字符绘制方式配置，字符长度配置等
    - 2、支持点位置随机，数量配置，点半径的配置
    - 3、支持线条位置随机，宽度配置，线条数量的配置
    - 4、支持随机前景色配置，区间值[0, 255]，可以使用默认值
    - 5、支持随机背景色配置,区间值[0, 255]，可以使用默认值
    - 6、支持点击更新视图
    - 7、支持浏览器谷歌浏览器，火狐浏览器，Safari，IE10+等

## 2、验证码插件-使用

不依赖与其他的插件，实现起来很容易，`captcha-mini.js`是必须要引进的组件

### 2.1 本地引入封装的js文件

第一步：获取组件方式：`git clone https://github.com/saucxs/captcha-mini.git`

第二步：clone后，在需要加验证码的相关页面引入验证码文件"captcha-mini.js"以及准备好装验证码容器:
引入captcha内容
```js
<script type="text/javascript" src="./captcha-mini.js"></script>
```

装验证码的容器
```html
<canvas width="240" height="90" id="captcha1"></canvas>
```
第三步：在确保页面DOM加载完毕之后，调用captcha的draw方法(手动加载):
```js
 /*不传值，统一走默认值*/
    let captcha1 = new CaptchaMini();
    captcha1.draw(document.querySelector('#captcha1'), r => {
        console.log(r, '验证码1');
    });
```
```js
/*传值,参数配置值，选择性配置*/
    let captcha2 = new CaptchaMini({
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
import CaptchaMini from 'captcha-mini'
或者
var CaptchaMini = require("captcha-mini")
````
第三步：在确保页面DOM加载完毕之后，调用captcha的draw方法(手动加载):
```js
 /*不传值，统一走默认值*/
    let captcha1 = new CaptchaMini();
    captcha1.draw(document.querySelector('#captcha1'), r => {
        console.log(r, '验证码1');
    });
```
```js
/*传值,参数配置值，选择性配置*/
    let captcha2 = new CaptchaMini({
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

## 3、支持浏览器

Chrome,FireFox,Safari,IE9及以上浏览器

## 4、其他

欢迎使用[watermark-dom](https://github.com/saucxs/watermark-dom)插件，功能：给B/S网站系统加一个很浅的dom水印插件。

欢迎使用[captcha-mini](https://github.com/saucxs/captcha-mini)插件，功能：生成验证码的插件，使用js和canvas生成的

欢迎使用[watermark-image](https://github.com/saucxs/watermark-image)插件，目前功能：图片打马赛克
