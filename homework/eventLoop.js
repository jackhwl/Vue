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