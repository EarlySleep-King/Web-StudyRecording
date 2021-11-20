const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Z_PARTIAL_FLUSH } = require('zlib');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:"development",
    entry:{
        index:'./src/index.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js',
        assetModuleFilename:'images/[hash][ext][query]',//
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test:/\.(jpg|png|gif)$/i,
                type:'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize:100*1024
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html"

        }),
        new MiniCssExtractPlugin({
            filename:"css/[name].css"
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