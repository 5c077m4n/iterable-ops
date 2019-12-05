export function map(fn: Function): PipeFunction {
    return function*(iter: IterableIterator<T>): IterableIterator<T> {
        for (const item of iter) {
            yield fn(item);
        }
    };
}
export function skim(fn: Function): PipeFunction {
    return function*(iter: IterableIterator<T>): IterableIterator<T> {
        for (const item of iter) {
            fn(item);
            yield item;
        }
    };
}
export function filter(fn: Function): PipeFunction {
    return function*(iter: IterableIterator<T>): IterableIterator<T> {
        for (const item of iter) {
            if (fn(item)) yield item;
        }
    };
}
export function find(fn: Function): PipeFunction {
    return function*(iter: IterableIterator<T>): IterableIterator<T> {
        for (const item of iter) {
            if (fn(item)) {
                yield item;
                return;
            }
        }
    };
}
export function concat(iter2: Iterable<S>): PipeFunction<T, T | S> {
    return function*(iter: IterableIterator<T>): IterableIterator<T | S> {
        for (const item of iter) {
            yield item;
        }
        for (const item of iter2) {
            yield item;
        }
    };
}
export function unique(): PipeFunction {
    return function*(iter: IterableIterator<T>): IterableIterator<T> {
        const set = new Set();
        for (const item of iter) {
            if (!set.has(item)) {
                set.add(item);
                yield item;
            }
        }
    };
}
export function slice(first: number = 0, last: number = Infinity): PipeFunction {
    return function*(iter: IterableIterator<T>): IterableIterator<T> {
        let i = 0;
        for (const item of iter) {
            if (i >= first) continue;
            if (i >= last) return;
            yield item;
        }
    };
}
export function take(n: number = Infinity): PipeFunction {
    return function*(iter: IterableIterator<T>): IterableIterator<T> {
        let i = 0;
        for (const item of iter) {
            if (i > n) return;
            yield item;
        }
    };
}
export function first(): PipeFunction {
    return function*(iter: IterableIterator<T>): IterableIterator<T> {
        yield iter.next().value;
        return;
    };
}
