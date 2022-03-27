# redux-saga
### 前置知识
- generator、promise、redux、redux 中间件、react；

### 概述
- redux 是一个常见的状态管理库，但是这个状态管理库只能处理同步的逻辑。如果项目中需要处理异步逻辑，就需要结合redux的一些中间件来实现；
- redux 常用中间件 redux-thunk、redux-promise、redux-saga；
- redux-saga，是管理应用程序side effect（副作用，如异步获取数据，访问浏览器缓存等）的library，它的目标是`让副作用管理更容易，执行更高效，测试更简单，在处理故障时更容易`。
- 不同于redux-thunk，`不会再有回调地狱`（例如多个请求有依赖，thunk就需要嵌套或者回调。es6之后可以通过generator用同步的方式来实现异步），你可以很容易的测试异步流程并保持你的action是干净的，因此我们可以说redux-saga`更擅长解决复杂异步场景，更便于测试`。

### saga
- 一个generator function，它会yield对象到redux-saga middleware。
- 一个saga所做的实际上是组合那些所有的effect，共同实现所需的控制流。

### effect
- 我们从generator里yield纯JavaScript对象以表达saga逻辑，我们称呼那些对象为effect。可以使用redux-saga/effects包里提供的函数来创建effect。
- effect是一个JavaScript对象，里面包含描述副作用的信息，可以通过yield传达给sagaMiddleware执行。
- 在redux-saga世界里，所有的effect都必须被yield才会执行（有人写了eslint-plugin-redux-saga来检查是否每个effect都被yield）。并且原则上，所有的yield后面也只能跟effect，以保证代码的易测性。

##### take
- take 创建一个命令对象，告诉middleware等待redux dispatch匹配的某个pattern的action；
- 如下，虽然定义了一个无限循环的while(true)，但是不必担心，因为这是一个generator函数，它不具备从运行到完成的行为（run-to-completion behavior）。generator 将在每次迭代阻塞以等待action的发起。
<!-- TODO -->
- take 的核心代码：
<!-- TODO -->

##### call与fork：阻塞调用与无阻塞调用
- redux-saga 可以用fork与call来调用子saga；其中fork是无阻塞型调用，call是阻塞型调用，即call是有阻塞的调用saga或者返回promise的函数。
- call核心函数：
<!-- TODO -->
- fork核心代码：
<!-- TODO -->

##### put
- 这个函数用于创建 dispatch effect，可以修改redux store的状态，其实是redux中的dispatch的封装。
  ```js
  yield put({type: LOGIN_IN})
  ```
- put 的核心源码：
<!-- TODO -->

### channel
- 我们使用take和put来与redux store通信，channels概括了概括了这些effects与外部事件源或sagas之间的通信。
- channel的核心代码：
<!-- TODO -->