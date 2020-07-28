
let path = require('path');
let express = require('express');
let app = express();
let manage = require('./model/manage');
let bodyParser = require('body-parser');
let utility = require('./model/common');

// 静态资源处理
app.use('/public/', express.static(path.join(__dirname, './public')));
// 模板引擎
app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
// 表单编码处理
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// 学生原始数据
let infos = [
    {
        id: 1,
        name: 'gy',
    },
    {
        id: 2,
        name: 'fs',
    },
    {
        id: 3,
        name: 'zyy',
    }
]

// 路由分配
app
    .get('/', (req, res) => {
        res.render('index.html', {
            messages: infos,
        })
    })
    .get('/create', (req, res) => {
        res.render('create.html');
    })
    .post('/create', urlencodedParser, (req, res) => {
        manage.create(req.body, infos);
        res.redirect('/');
    })
    .get('/delete', (req, res) => {
        infos = manage.del(req, infos);
        res.redirect('/');
    })
    .get('/update', (req, res) => {
        let index = utility.getIndexFromId(req.query.id, infos);
        let user = infos[index];
        res.render('update.html', {
            info: user
        });
    })
    .post('/update', urlencodedParser, (req, res) => {
        manage.update(req.body, infos);
        res.redirect('/');
    })
    .post('/', urlencodedParser, (req, res) => {
        let index = utility.getIndexFromId(req.body.id, infos);
        if (index != -1) {
            let user = infos[index];
            res.render('retrieve.html', {
                info: user
            })
        } else {
            res.render('404.html');
        }
    })
    .listen(3000, () => {
        console.log('http://localhost:3000');
    })


