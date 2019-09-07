/**
 * 
 * createStore.js で import している todoReducer
 * 
 * initialState は初期値です。今回は管理するTodoのリストのみを保持するオブジェクトとして定義します。
 * reducerは引数で現在の状態(state)とdispatchされたactionを受け取ります。
 * 受け取ったactionに応じた状態のstateを返すことで状態を更新します
 * 
 * state は書き換えるのではなく新たなオブジェクトとしなければなりません。
 * したがって単純に引数のstateに追加するのではなく、
 * いったん Object.assign メソッドで
 * 複製(ディープコピー)した新たな state に対して追加し、それを戻り値とします。
 * 
 */

const initialState = {
  todoList: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // 新しく追加するTODO
      const todo = action.payload.todo;
      // stateを複製して追加
      const newState = Object.assign({}, state);
      newState.todoList.push(todo);
      return newState;
    default:
      return state;
  }
};
