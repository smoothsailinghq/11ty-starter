import postcssImport from 'postcss-import';
import postcssNesting from 'postcss-nesting';
import postcssCustomMedia from 'postcss-custom-media';
import autoprefixer from 'autoprefixer';
import postcssUtopia from 'postcss-utopia';
import cssnano from 'cssnano';

export default {
  plugins: [
    postcssImport,
    postcssNesting,
    postcssCustomMedia,
    autoprefixer,
    postcssUtopia,
    cssnano({ preset: 'default' })
  ]
}