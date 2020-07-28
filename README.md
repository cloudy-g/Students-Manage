## 任务
+ 完成增删改查功能
  - 增加 create
  - 读取 retrieve
  - 删除 del
  - 修改 update
+ 插件使用
```javascript
  "art-template": "^4.13.2",  //模板引擎
  "body-parser": "^1.19.0",   //解析表单post请求
  "bootstrap": "^4.5.0",      //样式 
  "express": "^4.17.1",       //主要框架 
  "express-art-template": "^1.0.1"    //模板引擎
```
+ model 模块
   - manage
      - 处理具体业务模块
   - common
      - 存放一些需要用的方法
   - dataMethods.js
      - 数据库操作
   - router.js
      - 路由操作模块    
   - db.json
      - 自定义数据  

### Tip
-  模板引擎设置
-  静态资源加载
-  表单处理
-  数据的增删改查操作注意数组越界
-  样式简单
-  封装异步API