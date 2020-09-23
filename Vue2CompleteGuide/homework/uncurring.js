function uncurring(fn){
    return function(context,...args) {
        // garentee call prototype's apply
        // call 1.change this, 2, run fn, 3. pass params
        return Reflect.apply(fn,context,args);
        //return Function.prototype.apply.call(fn,context,args);
    }
}

let toString = uncurring(Object.prototype.toString);
let o = {name: 'jack'};
let r = toString(o);
console.log(r);
console.log(o);
console.log(o.toString());

let join = uncurring(Array.prototype.join);
let a = join([1,2,3],':');
console.log(a);