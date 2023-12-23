import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
	input: 'src/hydra-synth.js',
	output: [
		{
			file: 'dist/hydra-synth.js',
			format: 'umd',
			name: 'Hydra'
		}
	],
	plugins: [
		resolve({mainFields: ['browser','jsnext:main'], browser: true, preferBuiltins: false}),
		commonjs(),
		terser()
	]
};