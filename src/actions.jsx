let index = 0
export const add_todo = (text) => {
  return {
    type: 'ADD',
    id: index++,
    text
  }
}

export const toggle_todo = (id) => {
  return {
    type: 'CHANGE_FINISH',
    id
  }
}