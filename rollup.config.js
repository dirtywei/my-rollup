import commonjs from '@rollup/plugin-commonjs' //
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
// import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import eslint from '@rollup/plugin-eslint'

const isDev = process.env.BUILD !== 'production'

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es'
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'bundleName'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    // typescript({ compilerOptions: { lib: ['es5', 'es6', 'dom'], target: 'es5' } }),
    babel({ babelHelpers: 'bundled' }),
    eslint(),
    !isDev && terser()
  ],
  // 指出哪些模块需要被视为外部引入
  external: ['lodash']
}
