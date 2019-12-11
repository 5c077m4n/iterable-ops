import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

import { dependencies } from './package.json';

export default {
	input: './src/index.ts',
	output: [
		{
			file: './packages/lazy-piping.cjs/src/index.js',
			format: 'cjs',
		},
		{
			name: 'LazyPiping',
			file: './packages/lazy-piping.umd/src/index.js',
			format: 'umd',
		},
		{
			file: './packages/lazy-piping.esm/src/index.js',
			format: 'esm',
		},
	],
	external: [...Object.keys(dependencies || {})],
	plugins: [
		typescript({
			typescript: require('typescript'),
		}),
		terser(),
	],
};
