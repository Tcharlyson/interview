module.exports = {
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/_variables.scss";
        `
      },
      sass: {
        prependData: `
          @import "@/assets/scss/_variables.scss"
        `
      }
    }
  }
}
