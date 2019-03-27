const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
var webpack = require('webpack')

const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const DllReferencePlugin = require("webpack/lib/DllReferencePlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isProd = process.env.NODE_ENV == 'production';

var watch = isProd ? false : true; 
 

module.exports = {

    //production
    mode: isProd ? "production" : 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },


    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.(js|es6)$/,
                loader: 'babel-loader?cacheDirectory',
                options: {
                    presets: ['@babel/preset-env'],
                    //plugins: ['@babel/transform-runtime'] 与 HtmlWebpackPlugin 不兼容
                }
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    name: 'imgs/[name].[ext]?[hash:4]',
                    limit: 1,
                    //path: path.resolve(__dirname, '/dist'),
                    publicPath: "../", //编译完成后
                }
            },
        ]
    },

    optimization: {
        minimizer: [
            new TerserJSPlugin({
                //多进程压缩 number or bool
                parallel: true,
                sourceMap: true,
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [ 

        //dll
        new DllReferencePlugin({
            manifest: require("./dist/dll/vueLib-manifest.json")
        }),
        //变量 定义完后可以在项目中直接使用
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.test': 123
        }),
        // 启用作用域提升特性来避免这种额外的性能损耗 
        new webpack.optimize.ModuleConcatenationPlugin(),

        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin(),

        new MiniCssExtractPlugin({
            filename: '/css/style.css'
        }),

        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: './page/index.html',
        }),

       
    ],

    resolve: {
        //后缀
        extensions: ['.js', '.vue', ".less", ".es6"],
        //别名
        alias: {
            'getters': path.resolve(__dirname, './src/vuex/getters'),
            'actions': path.resolve(__dirname, './src/vuex/actions')
        }
    },
    //告诉 Webpack 如何去寻找 Loader
    resolveLoader: {
        modules: ["node_modules"], //, "myModules"
        //入口文件的后缀
        extensions: [".js", ".json"]
    },

    watch: watch,

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        //host: '0.0.0.0',
        open: true, 
        hot: true,
        historyApiFallback: true, 
        port: 9098,
      
    },

    watchOptions: {
        //不监听的文件或文件夹 可以正则
        ignored: /node_modules/,
        //发现变化 等待时间后 执行编译 提升性能 
        aggregateTimeout: 300,
        //轮询文件变化时间
        poll: 1000
    }

}


// new HtmlWebpackPlugin({
//     template: 'index.html',
//     chunks: ['vendor', 'commons', 'index']
//  })



//contentBase: path.join(__dirname, 'dist'),
// color: true,
// host: '0.0.0.0',
// open: true,
// //openPage: '/different/page',
// hot: true,
// historyApiFallback: true,
// // historyApiFallback: {
// //     rewrites: [
// //       { from: /^\/$/, to: '/views/landing.html' },
// //       { from: /^\/subpage/, to: '/views/subpage.html' },
// //       { from: /./, to: '/views/404.html' }
// //     ]
// //   }
// //compress: true,
// port: 9098,
// // proxy: {
// //     '/api': 'http://localhost:3000'
// // }
// // proxy: {
// //     '/api': {
// //       target: 'http://localhost:3000',
// //       pathRewrite: {'^/api' : ''}
// //     }
// //   }
// // proxy: [{
// //     context: ['/auth', '/api'],
// //     target: 'http://localhost:3000',
// //   }]