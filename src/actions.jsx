let index = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: index++,
    text
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const toggleAllTodos = () => {
  return {
    type: 'TOGGLE_ALL_TODOS'
  }
}

export const clearFinishedTodos = () => {
  return {
    type: 'CLEAR_COMPLETED_TODOS'
  }
}