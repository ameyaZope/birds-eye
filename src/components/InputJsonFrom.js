import { TextField } from '@material-ui/core';
import React from 'react';

export default function InputJsonForm(props) {
	const JSON5 = require('json5');
	const jsonToTable = require('json-to-table');
	const [error, setError] = React.useState(false);

	return (
		<div>
			<TextField
				error={error}
				id="json-input"
				label="JSON"
				multiline
				rows={23}
				defaultValue="[]"
				variant="outlined"
				fullWidth
				onChange={(e) => {
					try {
						const table = jsonToTable(JSON5.parse(e.target.value));
						props.setInputTable(JSON5.parse(e.target.value));
						props.setColumns(table[0]);
						props.setRows(table.slice(1, table.length));
						setError(false);
					} catch (e) {
						console.log('Invalid JSON detected in input field');
						setError(true);
					}
				}}
			/>
		</div>
	);
}
