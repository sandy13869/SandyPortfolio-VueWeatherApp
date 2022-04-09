// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: [
//     'vuetify'
//   ]
// })
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''  // This is whatever your path from the root is
    : '/'
}
