const initial = {
  list: [],
};

const todoReducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    // break;
    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      // const { id, data } = action.payload;

      return {
        ...state,
        list: newList,
      };

    case "REMOVETODO":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
export default todoReducer;
