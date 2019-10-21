function vi3() {
    this.$data = {
        a: 1,
        foo: {bar: 'child object 2'}
    };
    this.el = document.getElementById('app');
    this._html = "";
    this.observe(this.$data);
    this.render();
}

vi3.prototype.observe = function(obj){
    var value;
    var self = this;
    this.$data= new Proxy(this.$data, {
        get: function(target,key){
            return target[key];
        },
        set: function(target,key,newValue){
            target[key] = newValue;
            self.render();
        }
    });
}

vi3.prototype.render = function(){
    this._html="I am " + this.$data.a + " and a's child:" + this.$data.foo.bar;
    this.el.innerHTML= this._html;
}
