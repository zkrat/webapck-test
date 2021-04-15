


///aaa

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const source = path.resolve(__dirname, 'src');
const devMode = process.env.NODE_ENV !== 'production';
var bower_dir = __dirname + '/bower_components';
var node_dir = __dirname + '/node_modules';
var lib_dir = __dirname + '/public/js/libs';



const plugins = [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "window.$": "jquery",
        Nette: "nette-forms",
        naja: ["naja", "default"],
    })
];
if (devMode) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
}
module.exports = {
    context: __dirname,
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './www/dist'),
//        library: { type: "system", name: "app" }
    },

    plugins: plugins,
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                // publicPath is the relative path of the resource to the context
                                // e.g. for ./css/admin/main.css the publicPath will be ../../
                                // while for ./css/main.css the publicPath will be ../
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        },
                    },
                    'css-loader',
                    {
                        loader: `postcss-loader`,
                        options: {
                            options: {},
                        }
                    },
                    'sass-loader',
                ],
            }
            // ,{
            //     test: require.resolve('jquery'),
            //     use: [{
            //         loader: 'expose-loader',
            //         options: 'jQuery'
            //     },{
            //         loader: 'expose-loader',
            //         options: '$'
            //     }]
            // }
        ],
    },
    // externals: ['jquery']

};
