const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { Z_PARTIAL_FLUSH } = require('zlib');

module.exports = {
    mode:"development",
    entry:{
        index:'./src/index.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{},
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html"

        })
    ],
    devServer:{
        static:{
        directory: path.join(__dirname,"dist")
        },
        compress:true,
        port:9000
    }
}