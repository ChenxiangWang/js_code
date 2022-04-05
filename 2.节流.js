//高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率


// 使用时间戳
function throttle(fn, wait) {
    let timer = 0;
    return (...args)=> {
        const now = Date.now();
        if (now - timer > wait) {
            fn(args);
            timer = now;
        }
    }
}

// 使用定时器
function throttle2(fn, wait) {
    let timer;

    return (...args) => {
        if (!timer) {
            timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null
            }, wait)
            fn(args);
        }
    }

}
