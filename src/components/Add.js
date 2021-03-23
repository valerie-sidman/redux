import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeItemField, addItem, clearFields} from '../actions/actionCreators';

export default function Add() {
  const item = useSelector(state => state.serviceField);
	const dispatch = useDispatch();

  const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeItemField(name, value));
	}

  const handleCancel = () => {
    dispatch(clearFields());
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addItem(item.name, item.quantity, item.id));
    dispatch(clearFields());
}

  return (
    <form className="filling-form" onSubmit={handleSubmit}>
      <div className="fields-group">
        <div className="mb-3 item-form">
          <label htmlFor="item-field" className="form-label">Item</label>
          <input type="text" className="form-control" id="item-field" name="name" onChange={handleChange} value={item.name} />
        </div>
        <div className="mb-3 quantity-form">
          <label htmlFor="quantity-field" className="form-label">Quantity</label>
          <input type="text" className="form-control" id="quantity-field" name='quantity' onChange={handleChange} value={item.quantity}/>
        </div>
      </div>
      <button type="submit" className="btn btn-success">Apply</button>
      <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
    </form>
  )
}
