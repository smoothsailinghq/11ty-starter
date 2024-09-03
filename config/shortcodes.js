const setShortcodes = (eleventyConfig) => {
  eleventyConfig.addShortcode("icon", function (name, modifier) {
    return `<svg class="b-icon b-icon--${name} ${modifier}" role="img" aria-hidden="true" focusable="false" width="24" height="24">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-${name}"></use>
    </svg>`
  });
};

export default setShortcodes;


