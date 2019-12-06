"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../helpers/index");
class LazyIterable {
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
exports.LazyIterable = LazyIterable;
function from(iter, options) {
    return new LazyIterable(iter, options);
}
exports.from = from;
