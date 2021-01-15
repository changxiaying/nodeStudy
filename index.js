/*
 * @Author: changxy
 * @Date: 2020-11-26 19:29:38
 * @Description: 
 */
let a = require('./index1');
let b = require('./index1');
let $ = require('jquery');
console.log($);
//require('jquery') 优先加载该包的模块的同极目录下的node_modules, 找到文件的package.json 找 main 文件，
//没有main.js会加载index.js
//找到根目录

console.log(a == b);

