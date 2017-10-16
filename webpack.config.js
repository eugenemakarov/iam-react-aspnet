const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const merge = require('webpack-merge');
const postcssFocus = require('postcss-focus');
const cssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    // Configuration in common to both client-side and server-side bundles
    const sharedConfig = () => ({
        stats: { modules: false },
        resolve: {
            modules: ['app', 'node_modules'],
            extensions: [
                '.js',
                '.jsx',
                '.react.js',
            ],
            mainFields: [
                'jsnext:main',
                'main',
            ],
            alias: {
                moment: 'moment/moment.js',
            }
        },
        output: {
            filename: '[name].js',
            publicPath: 'dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        module: {
            loaders: [{
                test: /\.js$/, // Transform all .js files required somewhere with Babel
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react-hmre'],
                },
            },
            {
                // Transform our own .css files with PostCSS and CSS-modules
                test: /\.css$/,
                exclude: [/node_modules/, /_shared/],
                loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
            },
            {
                // Do not transform vendor's CSS with CSS-modules
                // The point is that they remain in global scope.
                // Since we require these CSS files in our JS or CSS files,
                // they will be a part of our compilation either way.
                // So, no need for ExtractTextPlugin here.
                test: /\.css$/,
                include: [/node_modules/, /_shared/],
                loaders: ['style-loader', 'css-loader'],
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
            }, {
                test: /\.(jpg|png|gif)$/,
                loaders: [
                    'file-loader',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
                ],
            }, {
                test: /\.html$/,
                loader: 'html-loader',
            }, {
                test: /\.json$/,
                loader: 'json-loader',
            }, {
                test: /\.(mp4|webm)$/,
                loader: 'url-loader?limit=10000',
            }],
        },
        plugins: [new CheckerPlugin()],
        resolveLoader: {
            moduleExtensions: ['-loader']
        },
    });

    // Configuration for client-side bundle suitable for running in browsers
    const clientBundleOutputDir = './wwwroot/dist';
    const clientBundleConfig = merge(sharedConfig(), {
        entry: { 'main-client': './wwwroot/app/app.js' },
        output: { path: path.join(__dirname, clientBundleOutputDir) },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            }),
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin()
        ])
    });

    // Configuration for server-side (prerendering) bundle suitable for running in Node
    const serverBundleConfig = merge(sharedConfig(), {
        resolve: { mainFields: ['main'] },
        entry: { 'main-server': './ClientApp/boot-server.tsx' },
        //plugins: [
        //    new webpack.DllReferencePlugin({
        //        context: __dirname,
        //        manifest: require('./ClientApp/dist/vendor-manifest.json'),
        //        sourceType: 'commonjs2',
        //        name: './vendor'
        //    })
        //],
        output: {
            libraryTarget: 'commonjs',
            path: path.join(__dirname, './ClientApp/dist')
        },
        target: 'node',
        devtool: 'inline-source-map'
    });

    return [clientBundleConfig, clientBundleConfig];
};