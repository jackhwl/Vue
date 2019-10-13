// Vue 2. how to impliment reactive
// update view when data change

function observer(target) {
    if (typeof target !== 'object' || target === null){
        return target;
    }
    for (let key in target) {
        defineReactive(target, key, target[key]);
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

let data = {name: 'jack', age: {n:100}};
observer(data);
//data.name = 'wenlin';
//data.age.n = 200;
data.age = {n:200};
data.age.n = 300;
console.log(data.name);