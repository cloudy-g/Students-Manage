// 路由模块
let router = require('express').Router();

let utility = require('./model/common');
let bodyParser = require('body-parser');
let manage = require('./model/manage');
// 表单编码处理
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 路由分配
router
    .get('/', (req, res) => {
        // 显示首页
       manage.showIndex(res);
    })
    .get('/create', (req, res) => {
        // 渲染新建页面
        res.render('create.html');
    })
    .post('/create', urlencodedParser, (req, res) => {
        manage.create(req.body, () => {
            res.redirect('/');
        });
    })
    .get('/delete', (req, res) => {
        manage.del(req, (err) => {
            if (err) {
                console.log(err);
                return
            }
            res.redirect('/');
        });
    })
    .get('/update', (req, res) => {
        manage.showUpdate(req, (err, data) => {
            if (err) {
                console.log(err);
                return
            }
            res.render('update.html', {
                info: data
            });
        })
    })
    .post('/update', urlencodedParser, (req, res) => {
        manage.update(req.body, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            res.redirect('/');
        });
    })
    .post('/', urlencodedParser, (req, res) => {
        manage.search(req.body, (err, data) => {
            if (err || data == null) {
                res.render('404.html');
                return;
            }
            res.render('retrieve.html', {
                info : data
            });
        })
    })

module.exports = router;