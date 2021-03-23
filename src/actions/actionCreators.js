import { ADD_ITEM, DELETE_ITEM, CHANGE_ITEM_FIELD, SEARCH_ITEM, CLEAR_FIELDS } from './actionTypes';

export function addItem(name, quantity, id) {
  return {type: ADD_ITEM, payload: {name, quantity, id}};
}

export function deleteItem(delId) {
  return {type: DELETE_ITEM, payload: {delId}};
}

export function changeItemField(name, value) {
  return {type: CHANGE_ITEM_FIELD, payload: {name, value}}
}

export function searchItem(value) {
  return {type: SEARCH_ITEM, payload: {value}};
}

export function clearFields() {
  return {type: CLEAR_FIELDS, payload: {}};
}
