import { range, isIterable, isAsyncIterable } from './index';

describe('Helpers tests', () => {
	describe('Range function tests', () => {
		it('Should return an array of 0 - 9', () => {
			const arr = [...range(0, 10)];
			expect(arr).toHaveLength(10);
			expect(arr).toEqual(expect.arrayContaining([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
		});
		it('Should return an array of 1 - 3', () => {
			const arr = [...range(1, 4)];
			expect(arr).toHaveLength(4);
			expect(arr).toEqual(expect.arrayContaining([1, 2, 3, 4]));
		});
	});
	describe('isIterable function tests', () => {
		it('Should say that a number is not an iterable', () => {
			expect(isIterable(123)).toBeFalsy();
		});
		it('Should say that an array is an iterable', () => {
			expect(isIterable([]));
		});
		it('Should say that a Set is an iterable', () => {
			expect(isIterable(new Set()));
		});
		it('Should say that a Map is an iterable', () => {
			expect(isIterable(new Map()));
		});
	});
	describe('isAsyncIterable function tests', () => {
		it('Should say that a custorm object is an async iterable', () => {
			const aIter = {
				[Symbol.asyncIterator]() {
					return Promise.resolve(123);
				},
			};
			expect(isAsyncIterable(aIter));
		});
	});
});
