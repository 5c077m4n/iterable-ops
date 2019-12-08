"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(fn) {
    return function* (iter) {
        for (const item of iter) {
            yield fn(item);
        }
    };
}
exports.map = map;
function skim(fn) {
    return function* (iter) {
        for (const item of iter) {
            fn(item);
            yield item;
        }
    };
}
exports.skim = skim;
function filter(fn) {
    return function* (iter) {
        for (const item of iter) {
            if (fn(item))
                yield item;
        }
    };
}
exports.filter = filter;
function find(fn) {
    return function* (iter) {
        for (const item of iter) {
            if (fn(item)) {
                yield item;
                return;
            }
        }
    };
}
exports.find = find;
function concat(iter2) {
    return function* (iter) {
        for (const item of iter) {
            yield item;
        }
        for (const item of iter2) {
            yield item;
        }
    };
}
exports.concat = concat;
function unique() {
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
exports.unique = unique;
function slice(first = 0, last = Infinity) {
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
exports.slice = slice;
function take(n = Infinity) {
    return function* (iter) {
        let i = 0;
        for (const item of iter) {
            if (i > n)
                return;
            yield item;
        }
    };
}
exports.take = take;
function first() {
    return function* (iter) {
        yield iter.next().value;
        return;
    };
}
exports.first = first;
