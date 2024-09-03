import settings from './_settings.js';
import { eleventyImageTransformPlugin as pluginImageTransform } from '@11ty/eleventy-img'

const setImageOptions = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginImageTransform, {
    extensions: 'html',
    formats: ['avif', 'auto'],
    outputDir: './dist/assets/img/processed/',
    urlPath: '/assets/img/processed/',
    widths: ['auto'],
    defaultAttributes: {
        loading: 'lazy',
        decoding: 'async'
    }
})
};

export default setImageOptions;