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

  const productionBuildConfig = merge(common(), {
    entry: { 'main-client': './wwwroot/app/app.js' },
    output: { path: path.join(__dirname, clientBundleOutputDir) },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./wwwroot/dist/vendor-manifest.json')
        }),
    ].concat([
      new webpack.optimize.UglifyJsPlugin()
    ])
  });

  return [productionBuildConfig]
}
