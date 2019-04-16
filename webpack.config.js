
const path = require("path");

const SOURCE = path.resolve(__dirname, "src");
const BUILD =  path.resolve(__dirname, "build");
const UNKNOWN_CSS_SOURCE = path.resolve(__dirname, "temp");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const data = require("./data.js");

const BABEL_LOADER = {
    loader: "babel-loader",
    options: {
        babelrc: false,
        presets:[["@babel/preset-env", {modules: false}], "@babel/preset-react"],
    }
}

module.exports = {
    mode: "development",
    context: SOURCE,
    entry : "./index.js",
    output: {
        path: BUILD,
        filename: "bundle.js",
        libraryTarget: 'umd'

    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                include: [SOURCE],
                use: BABEL_LOADER
            },
            {
                test:/\.css/,
                use: ["style-loader", "css-loader"],
                include: [UNKNOWN_CSS_SOURCE]
            },
            {
                test:/\.css/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders:1,
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    }
                 ]
            }
         ]
    },
    plugins: [
        new StaticSiteGeneratorPlugin({
            entry: 'main',
            paths: data.routes,
            globals: {
                window: {}
            },
            locals: {
                // Properties here are merged into `locals`
                // passed to the exported render function
                greet: 'Hello'
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
    ]
};