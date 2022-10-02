export const ADD_TODO = "todo/add";
export const TOGGLE_SELECTION = "todo/toggle-selection";
export const TOGGLE_SELECT_ALL = "todo/toggle-select-all";
export const DELETE_ALL_SELECTED = "todo/delete-all-selected";
export const DELETE = "todo/delete";

export const addTask = (text) => {
  return { type: "todo/add", text };
};

export const toggleSelection = (index) => {
  return { type: "todo/toggle-selection", index };
};
