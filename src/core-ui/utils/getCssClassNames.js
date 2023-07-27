/**
 * Takes an array of classnames and returns a new array with each classname prepended by a space.
 * If a classname is falsy (e.g., empty string, undefined, null), it will be excluded from the returned array.
 *
 * @param {Array} customClassnames - An array of classnames.
 * @returns {Array} - A new array with classnames, each prepended by a space.
 */
export const getCssClassNames = (customClassnames) =>
  customClassnames.map((customClassname) =>
    customClassname ? ` ${customClassname}` : ""
  );
