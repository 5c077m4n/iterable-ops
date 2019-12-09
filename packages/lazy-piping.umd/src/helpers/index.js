(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isIterable(obj) {
        var _a;
        return Array.isArray(obj) || typeof ((_a = obj) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]) === 'function';
    }
    exports.isIterable = isIterable;
    function isAsyncIterable(obj) {
        var _a;
        return typeof ((_a = obj) === null || _a === void 0 ? void 0 : _a[Symbol.asyncIterator]) === 'function';
    }
    exports.isAsyncIterable = isAsyncIterable;
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
});
