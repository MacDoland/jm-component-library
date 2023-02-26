const addDefaultToRequire = (options) => {
  const file = options?.file;
  const pattern = options?.targetPattern;

  return {
    name: "rollup-plugin-add-default-to-require", // this name will show up in warnings and errors
    version: "0.0.1",
    renderChunk(code, chunk, options) {
      let modifiedCode = code;

      if (file === options.file) {
        const regex = new RegExp(`(require\\(["']${pattern}['"]\\))`, "g");
        modifiedCode = code.replace(regex, (match) => `${match}.default`);
      }

      return {
        code: modifiedCode,
        map: null, // Set the source map to null if you don't want to change it
      };
    },
  };
};

export default addDefaultToRequire;
