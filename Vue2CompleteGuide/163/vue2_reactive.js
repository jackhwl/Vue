function vi2() {
    this.$data = {
        a: 1,
        foo: {bar: 'child object 2'}
    };
    this.el = document.getElementById('app');
    this._html = "";
    this.observe(this.$data);
    this.render();
}
let oldArrayPotoType = Array.prototype;
let proto = Object.create(oldArrayPotoType);
['push', 'shift','unshift'].forEach(method => {
    proto[method] = function() {
        //updateView();
        oldArrayPotoType[method].call(this, ...arguments);
    }
});
vi2.prototype.observe = function(obj){
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    if (Array.isArray(obj)){
        Object.setPrototypeOf(obj,proto);
        //obj.__proto__ = proto;
        for(let i=0;i<obj.length;i++){
            this.observe(obj[i]);
        }
    } else {
        for(var key in obj) {
            defineReactive(obj, key, obj[key], self);
        }
    }
}

function defineReactive(obj, key, value, self){
    //if (typeof value === 'object') {
        self.observe(value);
    //} else {
        Object.defineProperty(obj, key, {
            get: function(){
                return value;
            },
            set: function(newValue){
                if(newValue !== value){
                    self.observe(newValue);
                    value = newValue;
                    self.render();
                }
            } 
        })
    //}
}
vi2.prototype.render = function(){
    this._html="I am " + this.$data.a + " and a's child:" + this.$data.foo.bar;
    this.el.innerHTML= this._html;
}
