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
        for (const operation of this._callbackList) {
            const currentOp = operation(this._iter);
            const tmpResult = [];
            for (const _ of this._iter) {
                tmpResult.push(yield* currentOp);
            }
            this._iter = tmpResult.values();
        }
        return this._iter;
    }
    pipe(...ops) {
        this._callbackList = ops;
        return this;
    }
    get(cb) {
        const result = Array.from(this._calc());
        if (typeof cb === 'function')
            return cb(result);
        return Array.from(result);
    }
}
exports.LazyIterable = LazyIterable;
function from(iter, options) {
    return new LazyIterable(iter, options);
}
exports.from = from;
