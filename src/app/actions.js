export const ADD_TODO = "todo/add";
export const TOGGLE_SELECTION = "todo/toggle-selection";
export const TOGGLE_SELECT_ALL = "todo/toggle-select-all";
export const DELETE_ALL_SELECTED = "todo/delete-all-selected";
export const DELETE = "todo/delete";

export const addTask = (text, id) => {
  return { 
    type: "todo/add", 
    payload: { text, id }
  };
};

export const toggleSelection = (index) => {
  return { type: "todo/toggle-selection", index };
};

export const toggleSelectAll = (checked) => {
  return {
    type: TOGGLE_SELECT_ALL,
    checked
  }
}

export const deleteAllSelected = () => {
  return {
    type: DELETE_ALL_SELECTED
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE,
    id
  }
}