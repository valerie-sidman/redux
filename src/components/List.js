import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteItem, changeItemField} from '../actions/actionCreators';

export default function List() {
  const {filteredItems} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleUpdate = (id) => {
    const findUpdatedItem = filteredItems.find(item => item.id === id);
    dispatch(changeItemField('name', findUpdatedItem.name));
    dispatch(changeItemField('quantity', findUpdatedItem.quantity));
    dispatch(changeItemField('id', findUpdatedItem.id));
  }

  const handleRemove = id => {
    dispatch(deleteItem(id));
  }

  return (
      <ul>
        {filteredItems.map(o =>
          <li className="card" key={o.id}>
            <div className="card-header">Quantity: {o.quantity}</div>
            <div className="card-body">
              <p className="card-text">Item: {o.name}</p>
              <button type="button" className="btn btn-warning" onClick={() => handleUpdate(o.id)}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={() => handleRemove(o.id)}>Delete</button>
            </div>
          </li>)}
      </ul>
  )
}