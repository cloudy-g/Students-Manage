
let utility = require('./common');
let Student = require('../dataMethods');

//  显示首页
let showIndex = (res) => {
    Student.show((err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.render('index.html', {
            messages: data
        })
    })
}
//  增加学生信息
let create = (newinfo, callback) => {
    // console.log(newinfo);
    Student.create(newinfo, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        callback();
    })
};
//  删除学生信息
let del = (req, callback) => {
    let id = req.query.id;
    Student.del(id, (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    })
};
//  展示修改学生信息
let showUpdate = (req, callback) => {
    Student.find(req.query.id, (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data);
    })
}
let update = (newInfo, callback) => {
    Student.update(newInfo, (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    })
}

let search = (newInfo, callback) => {
    Student.find(newInfo.id, (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data);
    })
}


// 提供接口
module.exports = {
    showIndex,
    create,
    del,
    showUpdate,
    update,
    search
}