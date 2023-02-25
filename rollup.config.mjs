import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import pkg from './package.json' assert { type: 'json' };
import typescript from '@rollup/plugin-typescript';

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        external(),
        commonjs(),
        typescript(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled' 
        }),
        del({ targets: ['dist/*'] }),

    ],
    external: Object.keys(pkg.peerDependencies || {}),
};