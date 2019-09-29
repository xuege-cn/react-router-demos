import 'babel-polyfill'
import Koa from 'koa'
import koaNunjucks from 'koa-nunjucks-2'
import Router from 'koa-router'
import path from 'path'
import koaStatic from 'koa-static'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router";
import App from '../client/App'

const app = new Koa()
const router = new Router()

app.use(koaNunjucks({
    ext: 'html',
    path: path.resolve('dist'),
    nunjucksConfig: {
        trimBlocks: true,
        autoescape: false
    }
}));

const context = {};
router.get('/*', async(ctx, next) => {
    let url = ctx.req.url
    if(~url.indexOf('.')){
        return await next()
    }

    const markup = ReactDOMServer.renderToString(
        <StaticRouter location={ctx.req.url}>
            <App />
        </StaticRouter>
    );

    ctx.render('index', {
        title: '服务端渲染Router',
        content: markup
    })

    await next()
})
app.use(router.routes())

app.use(koaStatic(path.resolve('dist')), {
    extensions: ['js']
})

app.listen(3000, () => {
    console.log('服务器已启动！请打开浏览器输入localhost:3000进行访问')
})