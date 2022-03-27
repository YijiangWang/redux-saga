import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { loginReducer } from "./loginReducer";

// 1. 创建要运行的saga
import loginSaga from '../action/loginSaga';

// 2. 创建saga中间件
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({user: loginReducer}),

  // 3. 将这个saga middleware 连接至redux store
  applyMiddleware(sagaMiddleware)
);
// 4. 运行saga
