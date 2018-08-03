module.exports = {
  assetsDir: `assets`,
  runtimeCompiler: true,
  baseUrl: undefined,
  outputDir: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  lintOnSave: false,
  css: {
    modules: true,
    sourceMap: true,
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `
              @import "@/assets/scss/AdminLTE.scss";
              @import "@/assets/scss/customs.scss";
              `
      }
    }
  }
};
