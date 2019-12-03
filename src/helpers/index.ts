export function* range(
	start: number = 0,
	end: number = Infinity,
	step: number = 1
): Iterable<number> {
	while ((end -= step) > 0) {
		yield (start += step);
	}
}
