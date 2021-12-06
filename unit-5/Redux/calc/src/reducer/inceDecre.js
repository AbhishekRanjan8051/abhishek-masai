const initial = 0;

const changeNumber = (state = initial, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;

    //   break;

    default:
      return state;
    //   break;
  }
};
export default changeNumber;
