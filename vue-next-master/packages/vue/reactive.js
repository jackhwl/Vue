// Vue3.0 reactive principle
// 2.0 issue 1. default is recursive, 2. array change length invalid, 3. new property can't be hijack
function isObject(val) {
    return typeof val === 'object' && val !== null;
}
// reactive core method
function reactive(target) {
    // create reactive object
    return createReativeObject(target);
}

// create reactive object
function createReativeObject(target) {
    if(!isObject(target)){
        return target;
    }
    let baseHandler = {
        get(target, key, receiver){
            console.log('get');
            // proxy + reflact
            let result = Reflect.get(target,key,receiver);
            return result;
        },
        set(target, key, value, receiver){
            console.log('set');
            let res = Reflect.set(target, key, value, receiver);
            return res;
        },
        deleteProperty(){
            console.log('delete');
            let res = Reflect.deleteProperty(target,key);
            return res;
        }
    };
    let observed = new Proxy(target, baseHandler); //es6
    return observed;
}

let proxy = reactive({name: 'jack'});
//console.log(proxy);
//proxy.name;
proxy.name = 'wenlin';
delete proxy.name;