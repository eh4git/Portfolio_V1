module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      config.module.rules.push({
        test: /\.(pdf|docx)/,
        use: [
          defaultLoaders.babel,
          {
            loader: 'file-loader',
            options: '[name].[ext]'
          },
        ],
      })
  
      // Important: return the modified config
      return config
    },
  }