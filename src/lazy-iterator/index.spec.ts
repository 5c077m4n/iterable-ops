import { from } from './index';
import { map, filter, find } from '../ops/index';
import { range } from '../helpers/index';

describe('LazyIterator', () => {
    it('Should map an array', () => {
        const arr: number[] = [...range(0, 9)];
        const arrOut = from(arr)
            .pipe(map((x: number) => x * 2))
            .get();

        expect(arrOut).toEqual(expect.arrayContaining(arr.map((x: number) => x * 2)));
    });
    it('Should filter an array', () => {
        const arr: number[] = [...range(0, 9)];
        const arrOut = from(arr)
            .pipe(filter((x: number) => x % 2))
            .get();

        expect(arrOut).toEqual(expect.arrayContaining(arr.filter((x: number) => x % 2)));
    });
});
