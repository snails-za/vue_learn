/*
 * @Author: wangju wangjuchn@outlook.com
 * @Date: 2022-06-06 16:46:50
 * @LastEditors: wangju wangjuchn@outlook.com
 * @LastEditTime: 2022-06-06 17:03:58
 * @FilePath: /vue_learn/ES6 基础/promise 读取文件.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入fs
const fs = require("fs");

// 调用方法
fs.readFile("ES6 基础/test.txt", (err, data) => {
    //如果失败，抛出错误
    if(err) throw err;
    //如果成功，输出内容
    console.log(data.toString());
});

// 使用promise
const p = new Promise(function(resolve, reject){
    fs.readFile("ES6 基础/test.txt", (err, data) => {
        //如果失败，抛出错误
        if(err) reject(err);
        //如果成功，输出内容
        resolve(data)
    });
})

p.then(function(value){
    console.log(value.toString());
}, function(reason){
    console.log(reason);
})