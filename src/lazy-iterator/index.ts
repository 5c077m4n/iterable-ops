export class LazyIterable {
	private _iter: Iterable<any>;
	private _callbackList: PipeFunction<any, any>[] = [];

	constructor(iter: Iterable<any>, options: object = {}) {
		this._iter = iter;
	}

	private *_calc(): Iterable<any> {
		let result = this._iter;
		for (const op of this._callbackList) {
			result = yield* op(result);
		}
		return result;
	}

	public pipe(...ops: PipeFunction[]) {
		this._callbackList = ops;
	}

	public get(cb: Function): any[] {
		const result = Array.from(this._calc());

		if (typeof cb === 'function') return cb(result);
		return Array.from(result);
	}
}

export function from(iter: Iterable<any>, options: object): LazyIterable {
	return new LazyIterable(iter, options);
}
