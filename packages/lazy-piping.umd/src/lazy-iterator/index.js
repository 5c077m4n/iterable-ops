(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../helpers/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const index_1 = require("../helpers/index");
    class LazyPiping {
        constructor(iter, options = {}) {
            this._callbackList = [];
            if (!index_1.isIterable(iter)) {
                throw new TypeError('The given input is not a valid iterable.');
            }
            this._iter = iter;
        }
        *_calc() {
            let result = this._iter;
            for (const operation of this._callbackList) {
                const currentOp = operation(result);
                const tmpResult = [];
                for (const _ of result) {
                    tmpResult.push(yield* currentOp);
                }
                result = tmpResult.values();
            }
            return result;
        }
        pipe(...ops) {
            this._callbackList = (ops !== null && ops !== void 0 ? ops : []);
            return this;
        }
        get(callback) {
            const result = Array.from(this._calc());
            if (typeof callback === 'function')
                return callback(result);
            return result;
        }
    }
    exports.LazyPiping = LazyPiping;
    function from(iter, options) {
        return new LazyPiping(iter, options);
    }
    exports.from = from;
});
