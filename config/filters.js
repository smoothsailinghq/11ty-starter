import { DateTime } from "luxon";

const setFilters = (eleventyConfig) => {
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });
  
  eleventyConfig.addFilter('dateToISO', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISO({
      includeOffset: false,
      suppressMilliseconds: true
    })
  });
  
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter('years', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy');
  });
  
  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if(!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if( n < 0 ) {
      return array.slice(n);
    }
  
    return array.slice(0, n);
  });
  
  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });
};

export default setFilters;


