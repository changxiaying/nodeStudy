/*
 * @Author: changxy
 * @Date: 2020-12-07 19:02:29
 * @Description: 文件读取模块总和
 */
//导入文件模块
var fs = require('fs');


//度文件操作

function fsRead(path, options) {
    return new Promise((resolve,reject) => {
        fs.readFile(path, options, (err,data) => {
            if(err) {
                reject(err);
            }else {
                resolve(data)
            }
        })
    })
}

//写文件操作
function fsWrite(path, options) {
    return new Promise((resolve,reject) => {
        fs.writeFile(path, options, (err, data) => {
            if(err) {
                reject(err);
            }else {
                resolve(data);
            }
        })
    })
}

module.exports = {
    fsWrite,
    fsRead
}