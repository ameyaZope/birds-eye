import {
	Button,
	Grid,
	TextField,
} from '@material-ui/core';
import React from 'react';


export default function SqlQueryForm(props) {
	const jsonToTable = require('json-to-table');

	const [state, setState] = React.useState({
		query: '',
	});

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<TextField
					id="order-by-clause"
					label="SQL QUERY"
					variant="outlined"
					fullWidth
					onChange={(e) => {
						setState({
							...state,
							query: e.target.value,
						});
					}}
				/>
			</Grid>
			<Grid item xs={12}>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						const alasql = require('alasql');
						const query_response = alasql(state.query, [
							props.inputTable,
						]);
						const table = jsonToTable(query_response);
						props.setColumns(table[0]);
						props.setRows(table.slice(1, table.length));
					}}
				>
					Execute Query
				</Button>
			</Grid>
		</Grid>
	);
}
