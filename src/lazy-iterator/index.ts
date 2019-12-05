import { isIterable } from '../helpers/index';

export class LazyIterable {
    private _iter: IterableIterator<any>;
    private _callbackList: PipeFunction<any, any>[] = [];

    constructor(iter: IterableIterator<any>, options: object = {}) {
        if (!isIterable(iter)) throw new Error('The given input is not a valid iterable.');
        this._iter = iter;
    }

    private *_calc(): Iterable<any> {
        for (const operation of this._callbackList) {
            let tmpResult = [];
            for (const item of this._iter) {
                tmpResult.push(yield* operation(this._iter));
            }
            this._iter = tmpResult.values();
        }
        return this._iter;
    }

    public pipe(...ops: PipeFunction[]): LazyIterable {
        this._callbackList = ops;
        return this;
    }

    public get(cb?: Function): any[] {
        const result = Array.from(this._calc());

        if (typeof cb === 'function') return cb(result);
        return Array.from(result);
    }
}

export function from(iter: Iterable<any>, options?: object): LazyIterable {
    return new LazyIterable(iter as IterableIterator<any>, options);
}
