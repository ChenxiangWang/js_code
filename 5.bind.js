Function.prototype.myBind = function (obj, ...args1) {
    return (...args2) => {
        return this.call(obj, ...args1, ...args2);
    }
}

function foo (a, b) {
    console.log(this, a, b);
}

(foo.myBind('hi', 10))(20);
