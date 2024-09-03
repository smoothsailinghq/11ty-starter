import settings from './_settings.js';
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import pluginSvgSprite from "eleventy-plugin-svg-sprite";

const setPluginOptions = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginSvgSprite, {
    path: settings.ICONS_LOCATION,
    svgSpriteShortcode: "iconsprite"
  })
};

export default setPluginOptions;