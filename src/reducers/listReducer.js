import { nanoid } from 'nanoid';
import { ADD_ITEM, DELETE_ITEM, SEARCH_ITEM } from '../actions/actionTypes';

const initialState = { items: [], filteredItems: [] };

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      const { name, quantity, id } = action.payload;
      if (id) {
        const findedIndex = state.items.findIndex(item => item.id === id);
        state.items[findedIndex] = { id: id, name: name, quantity: quantity };
        return { items: state.items, filteredItems: state.items };
      } else {
        const items = [...state.items, { id: nanoid(), name, quantity }];
        return { filteredItems: items, items: items };
      }
    case DELETE_ITEM:
      const { delId } = action.payload;
      const filtered = state.items.filter(item => item.id !== delId);
      return { filteredItems: filtered, items: filtered };
    case SEARCH_ITEM:
      const { value } = action.payload;
      return { ...state, filteredItems: state.items.filter((val) => val.name.toLowerCase().includes(value.toLowerCase())) };
    default:
      return state;
  }
}
