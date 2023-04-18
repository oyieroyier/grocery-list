import { FaTrashAlt } from 'react-icons/fa';
import React from 'react';

const LineItem = ({ item, handleCheck, handleDelete }) => {
	return (
		<li
			className="item"
			style={{
				listStyle: 'none',
			}}
		>
			<input
				type="checkbox"
				checked={item.checked}
				onChange={() => handleCheck(item.id)}
			/>
			<label
				style={
					item.checked
						? {
								textDecoration: 'line-through',
								backgroundColor: '#999',
								borderRadius: '10px',
						  }
						: null
				}
				onDoubleClick={() => handleCheck(item.id)}
			>
				{item.item}
			</label>
			<FaTrashAlt
				onClick={() => handleDelete(item.id)}
				role="button"
				tabIndex="0"
				aria-label={`Delete ${item.item}`}
			/>
		</li>
	);
};

export default LineItem;
