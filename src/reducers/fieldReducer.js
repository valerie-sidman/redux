import {CHANGE_ITEM_FIELD, CLEAR_FIELDS} from '../actions/actionTypes';

const initialState = {
  filter: '',
  name: '',
  quantity: '',
  id: '',
};

export default function fieldReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ITEM_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case CLEAR_FIELDS: 
      return initialState;
    default:
      return state;
  }
}
