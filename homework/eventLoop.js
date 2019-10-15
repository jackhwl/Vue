// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

setTimeout(() => {
    console.log('time1');
}, 100);
setTimeout(() => {
    console.log('time2');
}, 0);
setTimeout(() => {
    console.log('time3');
}, 0);

setTimeout(() => {
    console.log('timeout1');
    Promise.resolve().then(data=>{
        console.log('promise2');
    });
}, 0);
setTimeout(() => {
    console.log('timeout2');
}, 0);
// Promise.resolve().then(data=>{
//     console.log('promise2');
// });

console.log('hello');

setTimeout(() => {
    console.log(9);
    new Promise((resolve, reject) => {
        console.log(5);
        resolve();
        console.log(6);
    }).then(() =>{
        console.log(7);
    });
}, 0);

setTimeout(() => {
    console.log(1);
}, 0);

var test = function(){
    console.log('hello world')
    return 'fsjohnhuang'
  }
  test.call() // ①
  //Function.prototype.call(test) // ②
  //Function.prototype.call.call.call(test) // ③

  //Function.prototype.call.call(Function.prototype.call, test) // ④

  var test2 = function(){
    console.log(this)
    return 'fsjohnhuang'
  }
  //test2() // 控制台显示window对象信息，返回值为fsjohnhuang
  test2.call({msg: 'hello world'}) // 控制台显示{msg:'hello world'}对象信息，返回值为fsjohnhuang

  const cpus = require('os').cpus().length;
  console.log(cpus);