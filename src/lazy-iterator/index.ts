import { isIterable } from '../helpers/index';

export class LazyIterable {
	private _iter: IterableIterator<any>;
	private _callbackList: PipeFunction<any, any>[] = [];

	constructor(iter: IterableIterator<any>, options: object = {}) {
		if (!isIterable(iter)) {
			throw new TypeError('The given input is not a valid iterable.');
		}
		this._iter = iter;
	}

	private *_calc(): Iterable<any> {
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

	public pipe(...ops: PipeFunction[]): LazyIterable {
		this._callbackList = ops ?? [];
		return this;
	}

	public get(callback?: Function): any[] {
		const result = Array.from(this._calc());

		if (typeof callback === 'function') return callback(result);
		return result;
	}
}

export function from(iter: Iterable<any>, options?: object): LazyIterable {
	return new LazyIterable(iter as IterableIterator<any>, options);
}
