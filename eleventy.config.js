import settings from './config/_settings.js';

import setServerOptions from './config/server.js';
import setViteOptions from './config/vite.js';
import setPluginOptions from './config/plugins.js';
import setImageOptions from './config/images.js';
import setMarkdownOptions from './config/markdown.js';

import setFilters from './config/filters.js';
import setShortcodes from './config/shortcodes.js';
import setCollections from './config/collections.js';

export default function(eleventyConfig) {
  setServerOptions(eleventyConfig);
  setPluginOptions(eleventyConfig);
  setImageOptions(eleventyConfig);
  setMarkdownOptions(eleventyConfig);

  setFilters(eleventyConfig);
  setShortcodes(eleventyConfig);
  setCollections(eleventyConfig);

  // Vite Shortcodes
  Object.keys(setViteOptions).forEach((shortcodeName) => {
    eleventyConfig.addNunjucksAsyncShortcode(
      shortcodeName,
      setViteOptions[shortcodeName]
    )
  })

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      "md",
      "njk",
      "html"
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: settings.PATH_PREFIX,
    // -----------------------------------------------------------------

    dir: {
      input: settings.INPUT_DIR,
      output: settings.OUTPUT_DIR,
      includes: '_includes',
      layouts: '_layouts',
      data: '_data'
    }
  };
};