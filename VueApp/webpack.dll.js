var path = require("path");

var webpack = require("webpack");



module.exports = {

    mode: "production",

    resolve: {
        extensions: [".js", ".jsx"]
    },
    
    entry: {
        vueLib: ['vue', 'vue-router','vuex']
        //beta: ["./beta", "./b", "./c"]
    },

    output: {
        //文件路径
        path: path.join(__dirname, "dist/dll/"),
        filename: "dll.[name].js",
        library: "[name]_[hash]"
    },

    plugins: [
        new webpack.DllPlugin({
            //json 文件路径
            path: path.join(__dirname, "dist/dll/", "[name]-manifest.json"),
            name: "[name]_[hash]"
        })
    ]
};