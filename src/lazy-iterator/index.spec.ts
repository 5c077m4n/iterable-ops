import { from } from './index';
import { map, filter, find, concat, unique, first, take, skim } from '../ops/index';
import { range } from '../helpers/index';

describe('LazyIterator', () => {
    let arr: number[];
    beforeEach(() => {
        arr = [...range(0, 9)];
    });

    it('Should throw an error for a non-iterable input', () => {
        try {
            // @ts-ignore
            from(123);
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
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
    it('Should use multiple pipe operators', () => {
        const arrOut = from(arr)
            .pipe(
                map((x: number) => x * 3),
                filter((x: number) => x % 2)
            )
            .get();

        expect(arrOut).toEqual(expect.arrayContaining(arr.map((x: number) => x * 3).filter((x: number) => x % 2)));
    });
    it('Should use more multiple pipe operators', () => {
        const arrOut = from(arr)
            .pipe(
                map((x: number) => x * 3),
                map((x: number) => x),
                filter((x: number) => x % 2),
                filter((x: number) => x % 2),
                filter((x: number) => x % 2),
                first()
            )
            .get();

        expect(arrOut).toEqual(expect.arrayContaining([0]));
    });
    it('Should use even more multiple pipe operators', () => {
        const arrOut = from(arr)
            .pipe(
                map((x: number) => x * 3),
                map((x: number) => x),
                filter((x: number) => !!x),
                filter((x: number) => x % 2),
                take(3),
                take(2),
                take(1),
                first()
            )
            .get();

        expect(arrOut).toEqual(expect.arrayContaining([0]));
    });
});
