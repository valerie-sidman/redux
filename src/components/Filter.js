import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeItemField, searchItem} from '../actions/actionCreators';

export default function Filter() {
  const item = useSelector(state => state.serviceField);
	const dispatch = useDispatch();

  const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeItemField(name, value));
    dispatch(searchItem(value));
	}

  return (
    <div className="row g-3 align-items-center filter-container">
      <div className="col-auto">
        <label htmlFor="filter-block" className="col-form-label">Let's filter!</label>
      </div>
      <div className="col-auto">
        <input type="text" id="filter-block" className="form-control" name='filter' onChange={handleChange} value={item.filter} />
      </div>
    </div>
  )
}
