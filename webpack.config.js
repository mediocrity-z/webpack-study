const path=require('path') //导入node.js操作路径的模块
const HtmlWebpackPlugin=require('html-webpack-plugin')   //导入生成预览页面的插件
const htmlPlugin=new HtmlWebpackPlugin({
    template:'./src/index.html',  //预览页面用到的模板文件
    filename:'index.html'  //生成的文件的名称，存在于内存中，在目录中不显示
})
const VueLoaderPlugin=require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',  //编译模式
    entry: path.join(__dirname,"./src/index.js"),   //打包的入口文件
    output: {
        path: path.join(__dirname,'./dist'),   //打包的出口文件的存放路径
        filename: "bundle.js"   //打包的出口文件的名称
    },
    plugins:[htmlPlugin,new VueLoaderPlugin()],  //在首页直接生成html预览图
    // 所有第三方文件模块的匹配规则
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']}, //test表示匹配的文件类型，use表示对应调用的加载器,从后往前调用
            {test:/\.png|jpg$/,use:"url-loader?limit=16940"},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
}
