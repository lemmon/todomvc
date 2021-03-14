import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'
import babel from '@rollup/plugin-babel'
import inject from '@rollup/plugin-inject'
import terser from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/app/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    postcss({
      extract: path.resolve('public/bundle.css'),
      minimize: production,
      plugins: [
        postcssImport(),
        postcssPresetEnv({
          stage: 0,
        }),
      ],
    }),
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
    production && terser.terser({
      output: {
        comments: false,
      },
    }),
  ],
}
