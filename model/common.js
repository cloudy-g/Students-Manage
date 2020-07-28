// 从指定id获取当前infos列表中的索引

module.exports = {
    getIndexFromId(id, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id == id){
                return i;
            }
        }
        return -1;
    }
}