/*
 * @Author: changxy
 * @Date: 2020-12-09 18:50:36
 * @Description: 
 */

 let readline = require('readline');
let {fsWrite} = require('./lcfs');
 //创建readline创建接口
var r1 =  readline.createInterface({
     output: process.stdout,
     input: process.stdin,
 });

 function IcQuestion(text) {
     return new Promise((resolve,reject) => {
         r1.question(text,(answer) => {
             resolve(answer);
         })
     })
 }

  async function creantePackage(){
   let name =  await IcQuestion('你的包名叫什么');
   let description =  await IcQuestion('如何描述你的包');
   let main = await IcQuestion('入口文件是什么'); 
   let author = await IcQuestion('作者是谁'); 
   let content = `${name}-${description}-${main}-${author}`; 
   await  fsWrite('hello.txt',content);
   //最终写完内容进行关闭
   r1.close();
  }

  creantePackage();

//  //设置r1提问事件
//  r1.question("今晚吃什么呢",(answer) => {
//      console.log("答复：",answer);
//      r1.close();
//  })
 

