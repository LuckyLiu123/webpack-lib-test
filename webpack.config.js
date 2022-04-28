const path = require('path')
const terserPlugin = require('terser-webpack-plugin')

module.exports = {
    // entry: './src/index.js',
    entry: {
        'add-number': './src/index.js',
        'add-number.min': './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './umd'),
        filename: '[name].js',
        library: 'kkb',   //指定库的名称
        libraryTarget: 'umd',  //指定打包的规范  var this window global umd
        libraryExport: "default"
    },
    //打包压缩文件和未压缩文件的时候mode不起作用，需要使用terser-webpack-plugin
    mode: "none",  //development production
    optimization: {
        minimize: true,  //是否开启压缩
        // minimizer 类似于 plugins
        minimizer: [
            new terserPlugin({
                test: /\.min\.js$/,  //以.min.js结尾的文件开启压缩
            })
        ]
    }
}