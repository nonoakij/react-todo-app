/**
 * 
 * Actionは、Reducerにしてほしい処理を伝えるためのメッセージです。
 * 
 * 単純なオブジェクトで、type プロパティを必ず持ち、これが処理のキーになります。
 * payload プロパティは、処理に使うパラメータで、この例では追加するTODOを持たせています。
 *  
 */

export const addTodo = (todo) => {
  console.log('ACTION addTodo')
  return { 
    type: 'ADD_TODO',
    payload: { todo: todo }
  };
}
