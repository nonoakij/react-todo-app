
/**
 * 
 * mapDispatchToProps 関数はこのコンポーネントで使用する state を切り出して、
 * コンポーネント内のpropsで参照できるようにマッピングするための関数です。
 * 
 * mapDispatchToProps 関数は、
 * dispatchするための関数をpropsにマッピングするための関数です。
 * 
 * それぞれ定義したものを、connect関数でコンポーネントに接続し、exportします。
 * こうすることで、コンポーネントがreduxによる状態管理を意識せず、
 * stateやdispatchを参照、実行できるようになります。
 * コンテナの使い方は簡単で、コンポーネントをimportしている箇所をコンテナに切り替えるだけです。
 * 
 */

import { connect } from 'react-redux';
import * as actions from '../actions/Todo';
import Todo from '../components/Todo';

const mapStateToProps = state => {
  return {
    todo: state.todo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(actions.addTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

