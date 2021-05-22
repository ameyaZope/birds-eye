import React from 'react';
import CSVReader from 'react-csv-reader';
import SqlQueryForm from './SqlQueryForm';
import DynamicTable from './DynamicTable';
import Button from '@material-ui/core/Button';

export default function SqlOnCsv(props) {
	const [rows, setRows] = React.useState([]);
	const [columns, setColumns] = React.useState([]);
	const [inputTable, setInputTable] = React.useState([]);

	const handleOnError = (err, file, inputElem, reason) => {
		console.log(err);
	};

	function handleCsvUpload(data) {
		const jsonToTable = require('json-to-table');
		console.log('---------------------------');
		console.log(data);
		console.log('---------------------------');

		const table = jsonToTable(data);
		setInputTable(data);
		setColumns(table[0]);
		setRows(table.slice(1, table.length));
	}

	return (
		<div>
			<Button variant="contained" color="primary">
				<CSVReader
					cssClass="csv-reader-input"
					label="Upload CSV File"
					onFileLoaded={handleCsvUpload}
					onError={handleOnError}
					parserOptions={{ header: true, dynamicTyping: true }}
					inputId="csv-input-reader-id"
					inputName="csv-input-reader-name"
					inputStyle={{ display: 'none' }}
				/>
			</Button>
			<SqlQueryForm
				setRows={setRows}
				setColumns={setColumns}
				inputTable={inputTable}
			/>

			<DynamicTable rows={rows} columns={columns} title={'Data'} />
		</div>
	);
}
