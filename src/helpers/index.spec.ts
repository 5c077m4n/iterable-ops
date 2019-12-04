import { range } from './index';

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
});
