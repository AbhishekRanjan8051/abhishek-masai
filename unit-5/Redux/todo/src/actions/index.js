export const addTodos = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleteTodos = (id) => {
  return {
    type: "DELETE_TODO",
    id
  };
};
export const removeTodos = () => {
  return {
    type: "REMOVETODO",
  };
};
