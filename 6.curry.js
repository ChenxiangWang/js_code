function currying(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            // 将 curried this 绑定给 fn
            /**
             *   let c = currying(fn);
             *   c.call(obj,..) ==> c是curried之后的函数，我们需要将obj传递给 fn
             *   所以 fn的调用需要使用到 curried之后函数的this.
             *   所以 要使用 fn.apply(this, args)
             * */

            return fn.apply(this, args);
        } else {
            // 创建一个新的函数, 用来接收接受参数
            return function (...args2) {
                // 接受参数 合并参数 继续调用curried后的函数
                return curried.apply(this,args.concat(args2))
            }
        }
    }
}


function add(x, y, z) {
    return x + y + z;
}

let curried = currying(add);
console.log(curried(1)(2)(3))
console.log(curried(1, 2)(3))
console.log(curried(1)(2, 3))