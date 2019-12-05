"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIterable(obj) {
    var _a;
    return Array.isArray(obj) || typeof ((_a = obj) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]) !== 'function';
}
exports.isIterable = isIterable;
function* range(start = 0, end = Infinity, step = 1) {
    let i = start;
    let stop = end;
    while (stop > 0) {
        yield i;
        i += step;
        stop -= step;
    }
}
exports.range = range;
