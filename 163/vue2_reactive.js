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

vi2.prototype.observe = function(obj){
    var value;
    var self = this;
    for(var key in obj) {
        value = obj[key];
        if (typeof value === 'object') {
            this.observe(value);
        } else {
            Object.defineProperty(obj, key, {
                get: function(){
                    return value;
                },
                set: function(newValue){
                    value = newValue;
                    self.render();
                } 
            })
        }
    }
}

vi2.prototype.render = function(){
    this._html="I am " + this.$data.a + " and a's child:" + this.$data.foo.bar;
    this.el.innerHTML= this._html;
}
