let index = 0
export const addTodo = (text) => {
  return {
    type: 'ADD',
    id: index++,
    text
  }
}

export const changeTODOState = (id) => {
  return {
    type: 'CHANGE_FINISH',
    id
  }
}