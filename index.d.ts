interface PipeFunction<TIn = any, TOut = TIn> {
    (iter: IterableIterator<TIn>): IterableIterator<TOut>;
}

type T = any;
type S = any;
