/*
 * @Author: changxy
 * @Date: 2020-12-09 18:43:11
 * @Description: 
 */

let fs = require('fs');

fs.rmdir('./deleteDir', (err) => {
    if(err) {
        console.log('删除失败');
    }else {
        console.log('删除成功');
    }
});
