// Vue 2. how to impliment reactive
// update view when data change
let oldArrayPrototype = Array.prototype;
let proto = Object.create(oldArrayPrototype); // inherit
['push', 'shift', 'unshift'].forEach(method => {
     proto[method] = function() { // hijack function, rewrite function, internal continue call old method 
        updateView(); //slice programming;
        oldArrayPrototype[method].call(this, ...arguments);
     }
})
function observer(target) {
    if (typeof target !== 'object' || target === null){
        return target;
    }
    if (Array.isArray(target)){ // hijack array, rewrite method in array
        Object.setPrototypeOf(target, proto); 
        //target.__proto__ = proto;
        for(let i=0; i<target.length; i++) {
            observer(target[i]);
        }
    } else {
        for (let key in target) {
            defineReactive(target, key, target[key]);
        }
    }

}

function defineReactive(target, key, value){
    observer(value);
    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue){
            if (newValue !== value){
                observer(newValue);
                updateView();
                value = newValue;
            }
        }
    })
}

function updateView() {
    console.log('update view');
}

//let data = {name: 'jack', age: {n:100}};
//observer(data);
//data.name = 'wenlin';
//data.age.n = 200;
// data.age = {n:200};
// data.age.n = 300;
//console.log(data.name);

let data = {name: 'jack', age: [1,2,3]};
observer(data);
data.age.push(4); 
console.log(data.age);