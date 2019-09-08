/**
 * コンテナからマッピングされた state, dispatch用のpropsを参照する
 * console.log(this.props) では、
 * コンテナからマッピングされた state(todo) と dispatch用のメソッド(addTodo())が確認できます。
 * 
 * todoList.map((todo, index) => <li key={index}>{todo}</li>) では、
 * 現在のstateのtodoListからリストを作成しています。
 * この例のように繰り返しで複製するjsxには key 属性で
 * 一意になる値を設定しないと警告がコンソール上に表示されます。
 * これを避けるためにindexを設定しています。
 * 
 * onChange={elm => this.setState({ todo: elm.target.value })} は
 * テキストボックスの変更時のイベントで入力値をローカルのstateに保持しています。
 * 
 * onClick={() => this.props.addTodo(this.state.todo)} で
 * ボタン押下時にイベントでローカルのstateに保持されている入力値を追加用の関数に引き渡してdispatchすることで、
 * storeの状態を書き換えます。
 * 成功すると、状態が更新されて再描画されることで、
 * リストに値が追加されていきます。
 * この時の状態の遷移はコンソール上に表示されているはずです。
 * これは、redux-logger というミドルウェアを使っているためです。
 * 
 */

import React from 'react';

export default class Todo extends React.Component {
  state = {
    todo: ''
  }


  render() {
    console.log('<<<<<<<  TodoComponent render  >>>>>>>');
    // StoreのTodoからリストを生成
    const list = this.props.todo.todoList.map((todo, index) => <li key={index}>{todo}</li>);

    return (
      <div>
        <input type="text" value={this.state.todo} onChange={elm => this.setState({ todo: elm.target.value })} />
        <button onClick={() => this.props.addTodo(this.state.todo)}>追加</button><br />
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}
