import React, { useState, useEffect } from 'react';

const bands = [
	{
		id: 1,
		name: 'Mafians',
		albums: 9,
		members: 6,
		year: 1996
	},
	{
		id: 2,
		name: 'Rockers',
		albums: 10,
		members: 4,
		year: 1981
	}
];

function Table() {
	const [data, setData] = useState([]);
	const [sortType, setSortType] = useState('albums');

	useEffect(() => {
		const sortArray = (type) => {
			const types = {
				albums: 'albums',
				members: 'members',
				year: 'year'
			};
			const sortProperty = types[type];
			const sorted = [...bands].sort(
				(a, b) => b[sortProperty] - a[sortProperty]
			);
			setData(sorted);
		};

		sortArray(sortType);
	}, [sortType]);

	return (
		<div>
			<div>
				<select onChange={(e) => setSortType(e.target.value)}>
					<option value='albums'>Albums</option>
					<option value='members'>Members</option>
					<option value='Year'>Year</option>
				</select>
			</div>

			{data.map((band) => (
				<div key={band.id} style={{ margin: '30px', color: 'green' }}>
					<div>{`Band: ${band.name}`}</div>
					<div>{`Albums: ${band.albums}`}</div>
					<div>{`Members: ${band.members}`}</div>
					<div>{`Year: ${band.year}`}</div>
				</div>
			))}
		</div>
	);
}

export default Table;
