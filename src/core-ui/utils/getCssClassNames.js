// this utility is created to handle undefined as className incase it is not passed from consumer
export const getCssClassNames = (customClassnames) =>
  customClassnames.map((customClassname) =>
    customClassname ? ` ${customClassname}` : ""
  );
