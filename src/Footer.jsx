import React from 'react';

const Footer = ({ length }) => {
	const style = {
		color: 'white',
		background: '#333',
		padding: '10px',
		textAlign: 'center',
	};

	const today = new Date();
	return (
		<footer style={style}>
			{/* Copyright &copy; {today.getFullYear()}{" "} */}
			<p>
				{length} List {length === 1 ? 'Item' : 'Items'}
			</p>
		</footer>
	);
};

export default Footer;
