import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React, { useEffect, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { Spinner } from '@chakra-ui/react';

function App() {
	const API_URL = 'http://localhost:3500/items';

	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState('');
	const [search, setSearch] = useState('');
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);

				if (!response.ok) {
					throw Error('Did not receive expected data.');
				}

				const listItems = await response.json();

				setFetchError(null);
				setItems(listItems);
			} catch (error) {
				setFetchError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		setTimeout(() => {
			fetchItems();
		}, 2000);
	}, []);

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id: id, checked: false, item };
		const listItems = [...items, myNewItem];
		setItems(listItems);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) {
			return;
		}

		addItem(newItem);
		setNewItem('');
	};

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);

		setItems(listItems);
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
	};

	return (
		<div className="App">
			<Header title="Groceries" />
			<SearchItem search={search} setSearch={setSearch} />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<main>
				{isLoading && (
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				)}
				{fetchError && (
					<p
						style={{
							color: 'red',
							textAlign: 'center',
							fontSize: '2rem',
							fontWeight: 'bold',
						}}
					>{`Error: ${fetchError}`}</p>
				)}
				{!fetchError && !isLoading && (
					<Content
						items={items.filter((item) =>
							item.item.toLowerCase().includes(search.toLowerCase())
						)}
						setItems={setItems}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				)}
			</main>
			<Footer length={items.length} />
		</div>
	);
}

export default App;
