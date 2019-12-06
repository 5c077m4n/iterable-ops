export function map(fn) {
    return function* (iter) {
        for (const item of iter) {
            yield fn(item);
        }
    };
}
export function skim(fn) {
    return function* (iter) {
        for (const item of iter) {
            fn(item);
            yield item;
        }
    };
}
export function filter(fn) {
    return function* (iter) {
        for (const item of iter) {
            if (fn(item))
                yield item;
        }
    };
}
export function find(fn) {
    return function* (iter) {
        for (const item of iter) {
            if (fn(item)) {
                yield item;
                return;
            }
        }
    };
}
export function concat(iter2) {
    return function* (iter) {
        for (const item of iter) {
            yield item;
        }
        for (const item of iter2) {
            yield item;
        }
    };
}
export function unique() {
    return function* (iter) {
        const set = new Set();
        for (const item of iter) {
            if (!set.has(item)) {
                set.add(item);
                yield item;
            }
        }
        set.clear();
    };
}
export function slice(first = 0, last = Infinity) {
    return function* (iter) {
        let i = 0;
        for (const item of iter) {
            if (i > first)
                continue;
            if (i >= last)
                return;
            yield item;
        }
    };
}
export function take(n = Infinity) {
    return function* (iter) {
        let i = 0;
        for (const item of iter) {
            if (i > n)
                return;
            yield item;
        }
    };
}
export function first() {
    return function* (iter) {
        yield iter.next().value;
        return;
    };
}
