/*
 * @Author: changxy
 * @Date: 2020-12-03 19:18:17
 * @Description: 
 */
// let fs = require('fs');
// fs.writeFile('hello.txt',"晚饭吃什么",{
//     flag: "a", //不断追加内容
//     encoding: "utf-8"
// },function(err){
//     if(err) {
//         console.log('写入内容出错');
//     }else {
//         console.log('写入内容');
//     }
// })

// function fsWrite(path,content,options) {
//     return new Promise((resolve,reject) => {
//         fs.writeFile(path,content,options,(err) => {
//             if(err) {
//                 reject(err)
//             }else {
//                 resolve();
//             }
//         })
//     })
// }
//三个异步函数无法保证顺序
// fsWrite('hello.txt',"晚饭吃什么",{
//     flag: "a", //不断追加内容
//     encoding: "utf-8"
// }).then(() => {
//     console.log('写入内容');
// }).catch((err) => {
//     console.log(err);
//     console.log('写入内容出错');
// });

// //设置成列表，单个单个无法保证顺序
// async function fsWriteList() {
//     await fsWrite('hello.html',"晚饭吃什么\n",{
//         flag: "a", //不断追加内容
//         encoding: "utf-8"
//     })

//     await fsWrite('hello.html',"我想吃狮子头\n",{
//         flag: "a", //不断追加内容
//         encoding: "utf-8"
//     })

//     await fsWrite('hello.html',"狮子头不好吃\n",{
//         flag: "a", //不断追加内容
//         encoding: "utf-8"
//     })
// }

// fsWriteList();

//新读写文件要是不存在，就会创造新的文件
//删除文件

// fs.unlink('hello.html',(err) => {
//     if(err) {
//         console.log('删除失败');
//     }else {
//         console.log('删除成功');
//     }
// });

//buffer
//数组二进制数据的存储
//解决问题
//1.数组不能进行二进制数据的操作
//2.js数组不能像java、python效率高
//3.buffer缓存数据，会在内存空间，开辟出固定大小的内存，连续的内存空间，性能特别快，不用在空间上寻找
// var str = "hello world";
// //写入数据
// let buf = Buffer.from(str);
// console.log(buf); //存储的是二进制,以十六进制数据进行显示
// //提取数据
// //将字符串转成buffer对象
// console.log(buf.toString());


//默认存储的数据不知道
//开辟一个空的buffer
//存放10个数据
// let buf1 = Buffer.alloc(10); //安全模式，会清除空间
// buf1[0] = 10;
// console.log(buf1);
//内容超出了只会截取一部分值

// let buf2 = Buffer.allocUnsafe(10); //不安全模式，设置的信息可能会泄露，效率更高。
// console.log(buf2);

//目录的读取
