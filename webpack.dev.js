/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const common = require("./webpack.common");
const merge = require('webpack-merge');

module.exports = () =>{
  const clientBundleOutputDir = './wwwroot/dist';

  const developmentBuildConfig = merge(common(), {
    entry: { 'main-client': './wwwroot/app/app.js' },
    output: { path: path.join(__dirname, clientBundleOutputDir) },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./wwwroot/dist/vendor-manifest.json')
        }),
    ].concat([
        // Plugins that apply in development builds only
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map', // Remove this line if you prefer inline source maps
            moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
        })
    ])
  });

  return [developmentBuildConfig]
}

