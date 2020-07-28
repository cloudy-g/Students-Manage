// 操作数据
let fs = require('fs');
let utility = require('./model/common');
let path = './db.json';
// 显示数据列表
exports.show = (callback) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            callback(err);
            return;            
        } 
        callback(null, JSON.parse(data).student);
    })
}
// 添加学生
exports.create = (newInfo, callback) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            callback(err);
            return;            
        } 
        let students = JSON.parse(data.toString()).student;
        students.push(newInfo);
        fs.writeFile(path, JSON.stringify({
            "student" : students
        }), (err, data) => {
            if (err) {
                callback(err);
            }
            callback(null);
        });
    })
}

// 更新学生信息
exports.update =  (newInfo, callback) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            callback(err);
            return;            
        } 
        let students = JSON.parse(data.toString()).student;
        let index = utility.getIndexFromId(newInfo.id, students);
        students[index] = newInfo;

        fs.writeFile(path, JSON.stringify({
            "student" : students
        }), (err, data) => {
            if (err) {
                callback(err);
            }
            callback(null);
        });
    })
}
// 删除学生
exports.del = (id, callback) => {

    fs.readFile(path, (err, data) => {
        if (err) {
            callback(err);
            return;            
        } 
        let students = JSON.parse(data.toString()).student;
        let index = utility.getIndexFromId(id, students);
        students.splice(index, 1);
        
        fs.writeFile(path, JSON.stringify({
            "student" : students
        }), (err, data) => {
            if (err) {
                callback(err);
            }
            callback(null);
        });
    })
}

// 查找指定id学生信息
exports.find = (id, callback) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            callback(err);
            return;            
        } 
        let students = JSON.parse(data.toString()).student;
        let index = utility.getIndexFromId(id, students);
        callback(null, students[index]);        
    })
}