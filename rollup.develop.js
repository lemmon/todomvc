import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import inject from '@rollup/plugin-inject'

export default {
  input: 'src/app/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
        ['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }],
      ],
    }),
    inject({
      app: path.resolve('src/rege/app.js'),
      createElement: path.resolve('src/rege/createElement.js'),
    }),
  ],
}
