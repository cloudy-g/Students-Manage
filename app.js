
let path = require('path');
let express = require('express');
let app = express();
let router = require('./router');

app
    // 静态资源处理
    .use('/public/', express.static(path.join(__dirname, './public')))
    // 模板引擎
    .engine('html', require('express-art-template'))
    .set('views', path.join(__dirname, 'views'))
    // 路由挂载
    .use(router)
    // 启动端口 
    .listen(3000, () => {
        console.log('http://localhost:3000');
    })


