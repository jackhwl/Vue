let fs = require('fs').promises;
let p = fs.readFile('./note.md', 'utf8');

function isPromise(value) {
    return typeof value.then === 'function';
}

Promise.race = function(promises) {
    return new Promise((resolve,reject)=>{
        for (let i=0;i<promises.length;i++){
            let current = promises[i];
            if (isPromise(current)){
                current.then(resolve, reject)
            }else{
                resolve(current);
            }
        }
    })
}

Promise.race([p,1]).then(data=>{
    console.log(data);
})