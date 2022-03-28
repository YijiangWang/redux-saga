# redux-saga

### 前置知识

- generator、promise、redux、redux 中间件、react；

### 概述

- redux 是一个常见的状态管理库，但是这个状态管理库只能处理同步的逻辑。如果项目中需要处理异步逻辑，就需要结合 redux 的一些中间件来实现；
- redux 常用中间件 redux-thunk、redux-promise、redux-saga；
- redux-saga，是管理应用程序 side effect（副作用，如异步获取数据，访问浏览器缓存等）的 library，它的目标是`让副作用管理更容易，执行更高效，测试更简单，在处理故障时更容易`。
- 不同于 redux-thunk，`不会再有回调地狱`（例如多个请求有依赖，thunk 就需要嵌套或者回调。es6 之后可以通过 generator 用同步的方式来实现异步），你可以很容易的测试异步流程并保持你的 action 是干净的，因此我们可以说 redux-saga`更擅长解决复杂异步场景，更便于测试`。

### saga

- 一个 generator function，它会 yield 对象到 redux-saga middleware。
- 一个 saga 所做的实际上是组合那些所有的 effect，共同实现所需的控制流。

### effect

- 我们从 generator 里 yield 纯 JavaScript 对象以表达 saga 逻辑，我们称呼那些对象为 effect。可以使用 redux-saga/effects 包里提供的函数来创建 effect。
- effect 是一个 JavaScript 对象，里面包含描述副作用的信息，可以通过 yield 传达给 sagaMiddleware 执行。
- 在 redux-saga 世界里，所有的 effect 都必须被 yield 才会执行（有人写了 eslint-plugin-redux-saga 来检查是否每个 effect 都被 yield）。并且原则上，所有的 yield 后面也只能跟 effect，以保证代码的易测性。

##### take

- take 创建一个命令对象，告诉 middleware 等待 redux dispatch 匹配的某个 pattern 的 action；
- 如下，虽然定义了一个无限循环的 while(true)，但是不必担心，因为这是一个 generator 函数，它不具备从运行到完成的行为（run-to-completion behavior）。generator 将在每次迭代阻塞以等待 action 的发起。
<!-- TODO -->
- take 的核心代码：
<!-- TODO -->

##### call 与 fork：阻塞调用与无阻塞调用

- redux-saga 可以用 fork 与 call 来调用子 saga；其中 fork 是无阻塞型调用，call 是阻塞型调用，即 call 是有阻塞的调用 saga 或者返回 promise 的函数。
- call 核心函数：
<!-- TODO -->
- fork 核心代码：
<!-- TODO -->

##### put

- 这个函数用于创建 dispatch effect，可以修改 redux store 的状态，其实是 redux 中的 dispatch 的封装。
  ```js
  yield put({type: LOGIN_IN})
  ```
- put 的核心源码：
<!-- TODO -->

### channel

- 我们使用 take 和 put 来与 redux store 通信，channels 概括了概括了这些 effects 与外部事件源或 sagas 之间的通信。
- channel 的核心代码：
<!-- TODO -->
