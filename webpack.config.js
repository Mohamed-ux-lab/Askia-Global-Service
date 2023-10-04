const path = require('path');


module.exports = {
    entry: './public/assets/js/index.js',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, './public/dist'),
        port: 8080,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
};