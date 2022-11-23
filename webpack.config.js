const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // Images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|mp4|m3u8|ts)$/i,
                use: ['file-loader'],
            },
            // CSS, PostCSS, and Sass     
            {
                test: /\.(pcss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(html|svelte)$/,
                exclude: /node_modules/,
                use: 'svelte-loader'
            },
            {
                test: /.m?js$/,
                type: 'javascript/auto',
                resolve: { fullySpecified: false }
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                use: {
                    loader: 'url-loader',
                },
            },
        ],
    },
    mode: 'development',
    devServer: {
        hot: true,
        port: 8081,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.ejs'),
            title: "Therapia"
        })
    ]
}