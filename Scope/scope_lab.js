// 全局作用域
var globalVar = "我是一個全局變量";
let globalLet = "我也是全局的，但用 let 限定作用域";
const globalConst = "我是一個全局常量";


{
// 块作用域
var blockVar = "我是一個块作用域的 var";
let blockLet = "我是一個块作用域的 let";
const blockConst = "我是一個块作用域的 const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"