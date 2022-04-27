Function.prototype.myCall = function (obj, ...args) {

    obj = Object(obj);
    let tmp = obj.fn;
    obj.fn = this;
    let result = obj.fn(...args);
    obj.fn = tmp;
    return result;
}

let name = 'window';

function foo() {
    console.log('hi, ', this.name);
}

let obj = {
    name: 'foo',
}
foo.myCall(obj,);


