# my-rollup

## rollup介绍
Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。Rollup 对代码模块使用新的标准化格式，这些标准都包含在 JavaScript 的 ES6 版本中，而不是像CommonJS 和 AMD这种特殊解决方案。

rollup最大的亮点就是Tree-shaking，即可以静态分析代码中的 import，**并排除任何未使用的代码**。这允许我们架构于现有工具和模块之上，而不会增加额外的依赖或使项目的大小膨胀。如果用webpack做，虽然可以实现tree-shaking，但是需要自己配置并且打包出来的代码非常臃肿，所以对于库文件和UI组件，rollup更加适合。

所以`rollup 使用场景主要是打包js库，webpack的繁琐和打包后的文件体积就不太适用`,主流的前端框架vue和react都是采用rollup来打包。


## rollup使用
全局安装rollup
```Git
npm i rollup -g
```
安装依赖
```
npn install
```
配置package.json 文件
```json
{
  "name": "my-rollup",
  "version": "1.0.0",
  "description": "这是一个测试rollup使用demo",
  "type": "module",
  "scripts": {
    "build:test": "rollup -c --environment BUILD:development",
    "build": "rollup -c --environment BUILD:production"
  },
  "keywords": [
    "前端",
    "rollup"
  ],
  "author": "DirtyWei",
  "files": [
    "dist"
  ],
  "devDependencies": {
    "@babel/core": "^7.21.0",
    "@babel/preset-env": "^7.20.2",
    "@rollup/plugin-babel": "^6.0.3",
    "@rollup/plugin-commonjs": "^24.0.1",
    "@rollup/plugin-eslint": "^9.0.3",
    "@rollup/plugin-node-resolve": "^15.0.1",
    "@rollup/plugin-terser": "^0.4.0",
    "@rollup/plugin-typescript": "^11.0.0",
    "prettier": "^2.8.4",
    "rollup": "^3.18.0"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}


```

## rollup插件
``` 
@rollup/plugin-node-resolve   //解析node_modules中的模块，然后导入
@rollup/plugin-commonjs       //将CommonJS转换为ES2015，Rollup才能处理

...
```