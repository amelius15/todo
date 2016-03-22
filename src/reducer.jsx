import {List, Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

export default function(state = Map(), action) {
  switch (action.type) {

  case 'SET_STATE':
    return setState(state, action.state);

  case 'ADD':
      return Object.assign({}, state, {
        items: [

          ...state.items,

          {
            done: false,

            text: action.text
          }

        ]

      })

  case 'CHANGE_FINISH':
      console.log(action.items);
      return Object.assign({}, state, {
        items: state.items.map((todo, index) => {
          console.log('ChangeState');
          if(index === action.index) {
            return Object.assign({}, todo, {
              done: !todo.done
            })
          }

          return todo

        })

      })

  default:
      return state
  }
  return state;
}