import {CHANGE_ITEM_FIELD} from '../actions/actionTypes';

const initialState = {filter: ''};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ITEM_FIELD:
      const {name, val} = action.payload;
      return {...state, [name]: val};
    default:
      return state;
  }
}
