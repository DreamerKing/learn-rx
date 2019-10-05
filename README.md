# 函数式编程和响应式编程

## 函数式编程
1. 声明式
2. 纯函数
3. 数据不可变性
[JavaScript函数式入门经典](https://segmentfault.com/a/1190000019069277)
## 响应式编程
响应式编程是一种通过异步和数据流来构建事务关系的编程模型。
好处：
+ 在业务层面实现代码逻辑分离，方便后期维护和拓展
+ 极大提高程序响应速度，充分发掘CPU的能力
+ 帮助开发者提高代码的抽象能力和充分理解业务逻辑
+ Rx丰富的操作符会帮助我们极大的简化代码逻辑
[响应式编程](https://zhuanlan.zhihu.com/p/27678951)
[响应式编程知多少 | Rx.NET 了解下](https://www.cnblogs.com/sheng-jie/p/10399049.html)

操作符分类
+ 创建类
  + create(fn)
  + of(list)
  + range(start, count)
      
+ 转化类
+ 过滤类
+ 合并类
+ 多播类
+ 错误处理类
+ 辅助工具类
+ 条件分支类
+ 数学统计类
+ 背压控制类
+ 可连接类
+ 高阶处理类

静态操作符 链式调静态操作符必须在前面
实例操作符

操作符的实现需要考虑的功能点：
+ 返回全新的Observable对象
+ 对上下游的订阅和退订处理
+ 处理异常情况
+ 及时释放资源

lift

# Observable
+ create
+ lift
+ subscribe
+ forEach
+ pipe
+ toPromise
