#### loadable的使用

##### 打开react-script的babelrc配置
node_modules/react-script/config/webpack.config.js

##### 配置.babelrc
{
    "plugins": ["@babel/plugin-syntax-dynamic-import"]
}

##### 使用
import loadable from '@loadable/component'

const Home = loadable(() => import("./router/home"))