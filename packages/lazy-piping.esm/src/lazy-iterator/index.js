import { isIterable } from '../helpers/index';
export class LazyPiping {
    constructor(iter, options = {}) {
        this._callbackList = [];
        if (!isIterable(iter)) {
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
export function from(iter, options) {
    return new LazyPiping(iter, options);
}
