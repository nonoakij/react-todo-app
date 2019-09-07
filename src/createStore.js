import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { todoReducer } from "./reducers/Todo";

/**
 * 
 * Redux内にある同名の createStore という関数を内部で使用するので、as を使って “reduxCreateStore” という名前で import しています。
 * 基本的には複数のReducerを利用することになるので、あらかじめ combineReducers を使って複数のReducerを使えるようにしています。
 * また、開発中は便利なので applyMiddleware で logger を適応しておくようにします。
 * 
 */

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      todo: todoReducer,
    }),
    applyMiddleware(
      logger,
    )
  );

  return store;
}
