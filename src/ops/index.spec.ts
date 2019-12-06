import { from } from '../lazy-iterator';
import { map, skim, find, concat, unique, slice } from '.';
import { range } from '../helpers';

describe('LazyIterator ops', () => {
    let arr: number[];
    beforeEach(() => {
        arr = [...range(0, 9)];
    });

    it('Should map an array', () => {
        const arrOut = from(arr)
            .pipe(map((x: number) => x * 2))
            .get();

        expect(arrOut).toEqual(expect.arrayContaining(arr.map((x: number) => x * 2)));
    });
    it('Should map an array', () => {
        const arrOut = from(arr)
            .pipe(map((x: number) => x * 2))
            .get();

        expect(arrOut).toEqual(expect.arrayContaining(arr.map((x: number) => x * 2)));
    });
    it('Should skim an array', () => {
        const arrOut = from(arr)
            .pipe(skim((x: number) => x % 2))
            .get();

        expect(arrOut).toEqual(expect.arrayContaining(arr));
    });
    it('Should find in an array', () => {
        const arrOut = from(arr)
            .pipe(find((x: number) => x % 2))
            .get();

        expect(arrOut).toEqual(expect.arrayContaining([arr.find((x: number) => x % 2)]));
    });
    it('Should concat two arrays', () => {
        const arrOut = from(arr)
            .pipe(concat(arr))
            .get();

        expect(arrOut).toEqual(expect.arrayContaining(arr.concat(arr)));
    });
    it('Should only return the unique values', () => {
        const arrOut = from(arr.concat(arr).concat(arr))
            .pipe(unique())
            .get();

        expect(arrOut).toEqual(expect.arrayContaining(arr));
    });
    it('Should slice the array - no params', () => {
        const arrOut = from(arr)
            .pipe(slice())
            .get();

        expect(arrOut).toEqual(expect.arrayContaining(arr.slice()));
    });
    it('Should slice the array - one param', () => {
        const arrOut = from(arr)
            .pipe(slice(1))
            .get();

        expect(arrOut).toEqual(expect.arrayContaining(arr.slice(1)));
    });
    it('Should slice the array - two params', () => {
        const arrOut = from(arr)
            .pipe(slice(1, 4))
            .get();

        expect(arrOut).toEqual(expect.arrayContaining(arr.slice(1, 4)));
    });
    it('Should find in the array', () => {
        const arrOut = from(arr)
            .pipe(find((x: number) => x === 7))
            .get();

        expect(arrOut).toEqual(expect.arrayContaining([arr.find((x: number) => x === 7)]));
    });
});
