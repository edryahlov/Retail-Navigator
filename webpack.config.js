const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './src/index.jsx'
    ],
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'index_bundle.js',
    //     publicPath: '/'
    // sourceMapFilename: '[file].map',
    // },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            'transform-decorators-legacy',
                            'transform-class-properties'
                        ],
                        presets: ['react', 'es2015', 'stage-0']
                    },
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        //includePaths: ["absolute/path/a", "absolute/path/b"]
                        //includePaths: [path.resolve(__dirname, './node_modules/foundation-sites/scss')]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            conf: path.resolve(__dirname, 'src/conf.js')
        }
    },
    // devtool: 'cheap-source-map',
    devServer: {
        historyApiFallback: true,
        stats: 'errors-only',
        inline: true,
    }
};