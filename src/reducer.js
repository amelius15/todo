const items = [{ done: true, text: 'Entry 1' },
  { done: false, text: 'Screw this' },
  { done: true, text: 'ayyy lmao' }];

const initialState = { items };

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        items: [

          ...state.items,

          {
            done: false,

            text: action.text,
          },

        ],

      });

    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        items: state.items.map((todo, index) => {
          if (index === action.id) {
            return Object.assign({}, todo, {
              done: !todo.done,
            });
          }
          return todo;
        }),
      });

    case 'TOGGLE_ALL_TODOS':
      return Object.assign({}, state, {
        items: state.items.map((todo) => Object.assign({}, todo, { done: !todo.done, }))
      });

    case 'CLEAR_COMPLETED_TODOS':
      return Object.assign({}, state, {
        items: state.items.filter((todo) => todo.done === false),
      });

    default:
      return state;
  }
}
