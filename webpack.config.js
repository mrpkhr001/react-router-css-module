
const path = require("path");

const SOURCE = path.resolve(__dirname, "src");
const UNKNOWN_CSS_SOURCE = path.resolve(__dirname, "temp");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BABEL_LOADER = {
    loader: "babel-loader",
    options: {
        babelrc: false,
        presets:[["@babel/preset-env", {modules: false}]],
    }
}

module.exports = {
    mode: "development",
    entry : "./src",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    module:{
        rules:[
            {
                test: /\/.(js|jsx)$/,
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
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
};