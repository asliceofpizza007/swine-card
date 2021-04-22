/* eslint-disable @typescript-eslint/no-var-requires */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/swine-card/'
  : '/',
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin()
    ],
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[name].[chunkhash].js'
    },
    resolve: {
      alias: {
        '@c': '@/components',
        '@v': '@/views',
        '@img': '@/assets/img',
        '@scss': '@/assets/scss',
      },
      extensions: ['.js', '.vue', '.json']
    }
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@scss/mixins.scss";
          @import "@scss/_variables.scss";
        `,
      },
    },
  },
}
