function wrap(p1) {
    let abort = null;
    let p = new Promise((resolve, reject)=>{
        abort = reject;
    });
    let newPromise = Promise.race([p,p1]);
    newPromise.abort = abort;
    return newPromise;
}

let p = wrap(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 3000);
}));

p.then(function(data){
    console.log(data);
}, function(err){
    console.log('err',err)
});
setTimeout(()=>{
    p.abort('overtime')
}, 5000);