/*
 * @Author: changxy
 * @Date: 2020-11-30 19:33:06
 * @Description: 
 */
//导入文件模块
 var fs = require('fs');
// node 读写文件也有同步和异步的接口
// java和python都是同步的，node用回调函数用来异步接口，事件的方式进行触发

//同步方式
let data = fs.openSync('./hello.txt','r');
// console.log(data); //3 输出的是一个标识
var buffer = Buffer.alloc(20);
//添加sync的同步读取
let content = fs.readSync(data,buffer,0,20);
//同步读取
var content1 = fs.readFileSync('hello.txt', {flag: 'r',encoding:'utf-8'});
//异步读取
// var content2 = fs.readFile("hello.txt", {
//     encoding:'utf-8',
//     flag: 'r'
// },(err,data) => 
// {
//     if(err) {
//         return;
//     }else {
//         console.log(data+'124');
//     }
//     console.log(456);
// })
// console.log(789);

//封装promise
function fsRead(path,options) {
    return new Promise(function(resolve,reject) {
        fs.readFile(path,options,(err,data) => {
            if(err) {
                reject(err);
            }else {
                resolve(data);
            }
        })
    })
}



// fsRead('hello.txt',{
//     encoding:'utf-8',
//     flag: 'r'
// }).then((data) => {
//     console.log(data);
// });

let a = '';
//读取列表
//多次读取文件
async function readList() {
    console.log(1);
    await fsRead('hello.txt',{
        encoding:'utf-8',
        flag: 'r'
    }).then((data) => {
        console.log(data);
        console.log(data.length);
        // a = data + '2222';
    });
    // console.log(2);
    // console.log(a);
    // await fsRead('hello2.txt',{
    //     encoding:'utf-8',
    //     flag: 'r'
    // }).then((data) => {
    //     console.log(data);
    //     console.log(a);
    // });
    // console.log(3);
    // await fsRead('hello3.txt',{
    //     encoding:'utf-8',
    //     flag: 'r'
    // }).then((data) => {
    //     console.log(data);
    // });
}

readList();
//每次读取文件之后有一个结束符号，虽然看不到，有一个空白结束符号，trim().去掉左右两边的空白符
//
