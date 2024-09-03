import settings from './_settings.js';

const setServerOptions = (eleventyConfig) => {
  eleventyConfig.setServerOptions({
    port: settings.PORT,
    domDiff: false,
  });

  // Asset Watch Targets
  eleventyConfig.addWatchTarget('./src/assets')

  // Pass-through files
  eleventyConfig.addPassthroughCopy('src/assets/img')
  eleventyConfig.addPassthroughCopy('src/assets/favicons')
  eleventyConfig.addPassthroughCopy('src/assets/fonts')

  // Deep-Merge
  eleventyConfig.setDataDeepMerge(true)
};

export default setServerOptions;