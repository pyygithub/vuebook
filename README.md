### 文件目录说明

- mock 模拟数据
- api 存放所有接口API文件
- base 基础组件
- components 页面组件


### 热门图书功能
- 先写服务端，确保数据正常返回
- 增加api方法，实现调取数据的接口
- 在哪个组件中应用这个api，如果是一个基础组件需要用这个api接口数据，就应该在使用这个组件的父级调用这个方法，将数据传递给基础组件
- 写一个基础组件：
  - 1. 创建一个 .vue 文件
  - 2. 在需要使用这个组件的父级中引用这个组件
  - 3. 在父级组件中注册这个组件
  - 4. 以标签的形式引入

### 路由元信息
 {path: '/home', component: Home, meta: {keepAlive: true}}








### 常用快捷键
- ctrl+b 跳转到方法内部
- meta:vp + tab 生成移动端
- ctrl + alt + l 整理代码
- ctrl + shift + up/down 行移动
- ctrl + shift + enter 直接向下开始新的一行
- shift + F6 全局修改函数或变量名称
- ctrl + y 删除一行
- ctrl + . 注释所在的函数
- ctrl + f 查找某个单词
- double shift 查找某文件
- ctrl + o 查找某个class name
- ctrl + L 跳转到某一行
- alt + 鼠标 多行同时编辑
