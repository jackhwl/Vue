
// Vue.reactive based on proxy

const toProxy = new WeakMap(); // stored object before proxy
const toRaw = new WeakMap(); // stored object after proxy

function trigger() {
    console.log('trigger view update');
}

function isObject(target) {
    return typeof target === 'object' && target !== null;
}

function reactive(target) {
    if (!isObject(target)) {
        return target;
    }
    // if found in proxy list, return the result
    let proxy = toProxy.get(target);
    if (proxy) {
        return proxy;
    }
    // if this object already proxyed, just return the object
    if (toRaw.has(target)) {
        return target;
    }
    const handlers = {
        set(target, key, value, receiver) {
            // if triggered property is private, call trigger method;
            if (target.hasOwnProperty(key)){
                trigger();
            }
            //console.log(key);
            //target[key] = value;
            return Reflect.set(target, key, value, receiver);
        },
        get(target, key, receiver) {
            const res = Reflect.get(target, key);
            if (isObject(target[key])) {
                return reactive(res); //recursive 
            }
            return res;
        },
        deleteProperty(target, key) {
            return Reflect.deleteProperty(target, key);
        }
    }
    console.log('proxy');
    let observed = new Proxy(target, handlers); // es6 tutorial
    toProxy.set(target, observed);
    toRaw.set(observed, target);
    return observed;
}

let obj = {
    name: 'zf',
    a: [1, 2, 3]
}

let p = reactive(obj);
p = reactive(obj);
p = reactive(obj);
// p.name = 'jw';

// let arr = [1, 2, 3];
// let p = reactive(arr);
p.a.push(4);

console.log(obj);