module.exports = {
  configureWebpack: {
    configureWebpack: (config) => {
      config.module.rules.push({
        test: /\.coffee$/,
        use: ['coffee-loader']
      })

      const newRule = {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: 'C:\\Jack\\Projects\\Vue\\Vue3Fundamentals\\build-a-bot\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 2096,
              fallback: {
                loader: 'C:\\Jack\\Projects\\Vue\\Vue3Fundamentals\\build-a-bot\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }

      const imagesRuleIndex = config.module.rules
        .findIndex((x) => x.test.source.includes('png|jpe?g|gif|webp'))
      config.module.rules.splice(imagesRuleIndex, 1, newRule)
    }
    // module: {
    //   rules: [
    //     {
    //       test: /\.coffee$/,
    //       use: ['coffee-loader']
    //     }
    //   ]
    // }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true
      }
    }
  }
}
