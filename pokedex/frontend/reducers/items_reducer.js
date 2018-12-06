import { RECEIVE_ALL_ITEMS } from '../actions/item_actions';

const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      return Object.assign({}, state, action.item);
    default:
      return state;
  }
};


export default itemsReducer;
