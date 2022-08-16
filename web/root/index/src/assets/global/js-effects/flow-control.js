// 防抖
function debounce(fn, delay) {
    let timer
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, delay)
    }
}

// 节流
function throttle(fn, threshhold) {
    let last
    let timer
    threshhold || (threshhold = 250)
    return function () {
        let context = this
        let args = arguments
        let now = +new Date()
        if (last && now < last + threshhold) {
            clearTimeout(timer)
            timer = setTimeout(function () {
                last = now
                fn.apply(context, args)
            }, threshhold)
        } else {
            last = now
            fn.apply(context, args)
        }
    }
}

// 流量控制
export {debounce, throttle}
