interface PipeFunction<TIn = any, TOut = TIn> {
	(iter: Iterable<TIn>): Iterable<TOut>;
}

type T = any;
type S = any;
