export function isIterable(obj) {
    var _a;
    return Array.isArray(obj) || typeof ((_a = obj) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]) !== 'function';
}
export function* range(start = 0, end = Infinity, step = 1) {
    let i = start;
    let stop = end;
    while (stop > 0) {
        yield i;
        i += step;
        stop -= step;
    }
}
