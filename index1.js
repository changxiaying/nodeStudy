/*
 * @Author: changxy
 * @Date: 2020-11-26 19:45:36
 * @Description: 
 */
let a = 123;
let b = 456;
let c = 789;
let s1 = {username:'学生'};
console.log(s1);
//exports是默认导出的对象
exports.a = a;

module.exports.c = c;
// exports = module.exports;
module.exports = {user:"小明"}