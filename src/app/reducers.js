import {
  ADD_TODO,
  DELETE,
  DELETE_ALL_SELECTED,
  TOGGLE_SELECTION,
  TOGGLE_SELECT_ALL,
} from "./actions";

const removeNth = (arr, n) => {
  return [...arr.slice(0, n), ...arr.slice(n + 1)];
};

export const todosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { todos } = state;
      const { text } = action;
      return { ...state, todos: [...todos, { text }] };
    }
    case TOGGLE_SELECTION: {
      const { index } = action;
      const { todos } = state;
      const updatedTodos = todos.map((item, i) => {
        if (i === index) {
          return { ...item, selected: !Boolean(item.selected) };
        }
        return item;
      });
      return { ...state, todos: updatedTodos };
    }
    case TOGGLE_SELECT_ALL: {
      throw new Error("Not implemented");
    }
    case DELETE_ALL_SELECTED: {
      throw new Error("Not implemented");
    }
    case DELETE: {
      throw new Error("Not implemented");
    }
    default:
      return state;
  }
};

export const initialState = {
  todos: [{ text: "Aprender Redux", selected: false }],
};
