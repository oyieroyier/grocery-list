import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
	const inputRef = useRef();
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<label htmlFor="add-item"> Add Item</label>
			<input
				type="text"
				ref={inputRef}
				autoFocus
				id="add-item"
				placeholder="Add Item"
				required
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button
				type="submit"
				aria-label="Add Item"
				onClick={() => inputRef.current.focus()}
			>
				<FaPlus />
			</button>
		</form>
	);
};

export default AddItem;
