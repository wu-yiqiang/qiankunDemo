const appName = require('./package.json').name;
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*', // 允许跨域
    },
  },
  output: {
    library: `${appName}-[name]`,
    libraryTarget: 'umd', // 把子应用打包成 umd 库格式
    jsonpFunction: `webpackJsonp_${appName}`,
  },
};
