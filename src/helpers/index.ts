export function isIterable(obj: any): boolean {
    return Array.isArray(obj) || typeof obj?.[Symbol.iterator] === 'function';
}
export function isAsyncIterable(obj: any): boolean {
    return typeof obj?.[Symbol.asyncIterator] === 'function';
}
export function* range(start: number = 0, end: number = Infinity, step: number = 1): Iterable<number> {
    let i = start;
    let stop = end;
    while (stop > 0) {
        yield i;
        i += step;
        stop -= step;
    }
}
