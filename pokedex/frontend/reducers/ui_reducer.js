// import receiveAllErrors from '../actions/ui_actions';
import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON:
      return 'action.pokemon';
    default:
      return state;
  }
};

export default uiReducer;
