import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

export default {
	watch: true,
	input: 'dev/index.js',
	output: [
		{
			file: 'dev/index.bundle.js',
			format: 'umd',
			name: 'Hydra'
		}
	],
	plugins: [
		resolve({mainFields: ['browser','jsnext:main'], browser: true, preferBuiltins: false}),
		commonjs(),
		serve('dev'),
		livereload({watch: 'dev'})
	]
};