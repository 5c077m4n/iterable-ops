export function* range(start: number = 0, end: number = Infinity, step: number = 1): Iterable<number> {
	let i = start;
	let stop = end;
	while (stop > 0) {
		yield i;
		i += step;
		stop -= step;
	}
}
