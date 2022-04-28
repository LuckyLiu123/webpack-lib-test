# webpack-lib-test
webpack打包公共库

打包公共库需要提供压缩版本的代码和未压缩版本的代码
压缩版本的代码提供给 production
未压缩版本的代码提供给 development

## 如何把代码打包成压缩版本和未压缩版本两个文件 ##
不使用webpack自带的mode，而是在 optimization 配置项中添加是否开启压缩的配置，并使用 terser-webpack-plugin 插件压缩文件

npm publish 发布npm包

## Module Federation 模块联邦 ##
微服务的一种
共享
npm包也是一种共享方式（npm install）
模块联邦是 容器 和 加载

模块联邦的配置方式
```js
    const { ModuleFederationPlugin } = require("webpack").container;

    module.exports = {
        ...
        plugins: [
            new ModuleFederationPlugin({
                name: "",   //命名空间
                filename: "",   //文件名称
                library: {
                    type: "var"
                },
                //加载远程资源
                remotes: "${name}/${url}:port/${filename}",
                //暴露 共享出去的组件，模块
                exposes: {   //js模块 还是vue组件 还是react组件
                    lh: "./src/index.js"
                },
                shared: ["vue", "react", "react-dom"]
            })
        ]
    }
```

























