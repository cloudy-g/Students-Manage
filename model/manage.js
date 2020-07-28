
let utility = require('./common');
//  增加学生信息
let create = (newinfo, infos) => {
    // console.log(newinfo);
    infos.push(newinfo);
    infos.sort((o1, o2) =>  o1.id-o2.id);
};
//  删除学生信息
let del = (req, infos) => {
    let index = utility.getIndexFromId(req.query.id, infos);
    infos.splice(index, 1);
    return infos;
};
//  修改学生信息
let update = (newInfo, infos) => {
    let index = utility.getIndexFromId(newInfo.id, infos);
    infos[index] = newInfo;
}











// 提供接口
module.exports = {
    create,
    del,
    update, 
}