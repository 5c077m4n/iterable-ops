export function map(fn: Function): PipeFunction {
	return function*(iter: Iterable<T>): Iterable<T> {
		for (const item of iter) {
			yield fn(item);
		}
	};
}
export function skim(fn: Function): PipeFunction {
	return function*(iter: Iterable<T>): Iterable<T> {
		for (const item of iter) {
			fn(item);
			yield item;
		}
	};
}
export function filter(fn: Function): PipeFunction {
	return function*(iter: Iterable<T>): Iterable<T> {
		for (const item of iter) {
			if (fn(item)) yield item;
		}
	};
}
export function find(fn: Function): PipeFunction {
	return function*(iter: Iterable<T>): Iterable<T> {
		for (const item of iter) {
			if (fn(item)) return item;
		}
	};
}
export function concat(iter2: Iterable<S>): PipeFunction<T, T | S> {
	return function*(iter: Iterable<T>): Iterable<T | S> {
		for (const item of iter) {
			yield item;
		}
		for (const item of iter2) {
			yield item;
		}
	};
}
export function unique(): PipeFunction {
	return function*(iter: Iterable<T>): Iterable<T> {
		const set = new Set();
		for (const item of iter) {
			if (!set.has(item)) yield item;
			set.add(item);
		}
	};
}
