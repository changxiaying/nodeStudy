/*
 * @Author: changxy
 * @Date: 2020-11-23 19:14:46
 * @Description: node学习调试
 */
const { response } = require('express');
const express = require('express');

const app = express();

app.get('/', (req,res) => {
    let a = 0;
    function b() {
        a += 1;
    }
    function c() {
        b();
    }
    c();
    res.send(`Hello ${a}`);
    
})

app.listen(3002, () => {
    console.log("程序运行在3000 端口")
});
