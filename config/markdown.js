import settings from './_settings.js';
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

const setMarkdownOptions = (eleventyConfig) => {
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "b-inline-link",
      symbol: "#"
    }),
    level: [1,2,3,4],
    slugify: eleventyConfig.getFilter("slugify")
  });
  eleventyConfig.setLibrary("md", markdownLibrary);
};

export default setMarkdownOptions;