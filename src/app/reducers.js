import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TODO,
  DELETE,
  DELETE_ALL_SELECTED,
  TOGGLE_SELECTION,
  TOGGLE_SELECT_ALL,
} from "./actions";


// const removeNth = (arr, n) => {
//   return [...arr.slice(0, n), ...arr.slice(n + 1)];
// };

export const todosReducer = (state, action) => {
  switch (action.type) {

    case ADD_TODO: {
      const { todos } = state;
      const { text, id } = action.payload;
      return { ...state, todos: [...todos, { text, id, selected: false }] };
    }

    case TOGGLE_SELECTION: {

      const { index } = action;
      const { todos } = state;

      const updatedTodos = todos.map((item) => {
        if (item.id === index) {
          return { ...item, selected: !Boolean(item.selected) };
        }
        return item;
      });
      return { ...state, todos: updatedTodos };
    }

    case TOGGLE_SELECT_ALL: {
      const { todos } = state;
      const { checked } = action;

      let newSatate = todos.map(todo => {
        return {
          ...todo, 
          selected: checked}
      })
      return { ...state, todos: newSatate }
    }

    case DELETE_ALL_SELECTED: {
      const { todos } = state;
      const filteredTodos = todos.filter(todo => todo.selected === false)

      return {...state, todos: filteredTodos }

    }

    case DELETE: {

      const { todos } = state;
      const { id } = action;

      const todosFiltrados = todos.filter(todo => todo.id !== id);

      return { ...state, todos: todosFiltrados }
    }
    default:
      return state;
  }
};

export const initialState = {
  todos: [{ text: "Aprender Redux", selected: false, id: uuidv4() }],
};

console.log(initialState)
