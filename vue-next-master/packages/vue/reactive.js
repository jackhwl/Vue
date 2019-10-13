
// Vue3.0 reactive principle
// 2.0 issue 1. default is recursive, 2. array change length invalid, 3. new property can't be hijack

let toProxy = new WeakMap(); //weak reference es6 use store original object ( already proxyed)
let toRaw = new WeakMap(); // proxyed object: original object
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
    function hasOwn(target,key){
        return target.hasOwnProperty(key);
    }
    let proxy = toProxy.get(target); // if already proxyed, return the result
    if(proxy) {
        return proxy;
    }
    if(toRaw.has(target)){  //prevent proxyed object proxy again
        return target;
    }
    let baseHandler = {
        get(target, key, receiver){
            
            // proxy + reflact
            let result = Reflect.get(target,key,receiver);
            //console.log('get');
            // collect sub, current key with effect
            track(target, key); // if this key of target changed, then run effect in the array

            return isObject(result) ? reactive(result) : result;
        },
        set(target, key, value, receiver){
            let hasKey = hasOwn(target, key);
            let oldValue = target[key];
            let res = Reflect.set(target, key, value, receiver);
            if(!hasKey){
                // new property
                trigger(target,'add',key);
            } else if(oldValue !== value) {
                // update property
                trigger(target,'set',key);
            }
            console.log('set');
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
 
// depend collect, sub

let activeEffectStacks = [];
// {
//     target: {
//         key: [fn,fn]
//     }
// }
let targetsMap = new WeakMap();
function track(target,key){ // this key of target changed, then run effect
    let effect = activeEffectStacks[activeEffectStacks.length - 1];
    if (effect){ // has relationship
        let depsMap = targetsMap.get(target);
        if(!depsMap) {
            targetsMap.set(target, depsMap = new Map);
        }
        let deps = depsMap.get(key);
        if(!deps){
            depsMap.set(key, deps = new Set());
        }
        if(!deps.has(effect)){
            deps.add(effect);
        }

        // dynamic creat depends relation
    }
}
function trigger(target,type,key){
    let depsMap = targetsMap.get(target);
    if(depsMap){
        let deps = depsMap.get(key);
        if(deps){ // run currect key related effects one by one
            deps.forEach(effect => {
                effect();
            })
        }
    }
}
function effect(fn) {
    // need turn fn to reactive function
    let effect = createReactiveEffect(fn);
    effect(); // default run once
}

function createReactiveEffect(fn){
    let effect = function (){ // this is created reactive function
        return run(effect, fn);  // 1, let fn run, 2, store this effect to stack.
    }
    return effect;
}
function run(effect, fn){ // run fn and store effect
    try{
        activeEffectStacks.push(effect);
        fn();    
    } finally{      
        activeEffectStacks.pop();  
    }
}

let obj = reactive({name: 'jack'});
effect(() => { // effect will run twice, default will run once.
    console.log(obj.name); // will call get
})
obj.name = 'wenlin';
obj.name = 'wenlin';
// let proxy = reactive({name: {n:'jack'}});
// toProxy.set(target, observed);
// toRaw.set(observed,target);

// //console.log(proxy);
// //proxy.name;
// proxy.name.n = 'wenlin';
// //delete proxy.name;

// let arr = [1,2,3];
// let proxy = reactive(arr);
// proxy.push(4);