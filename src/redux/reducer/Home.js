import { FETCH_PRODUCT_LIST } from "../actionTypes";

const initState = {
  list: []
};

const home = (state = initState, action) => {
  switch(action.type) {
    case FETCH_PRODUCT_LIST:
      return { ...state, list: action.list };
    default:
      return state;
  }
};

export default home;
