
const path = require("path");

const SOURCE = path.resolve(__dirname, "src");

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
                include: [""]
            }
         ]
    }
};