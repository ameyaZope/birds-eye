import React from 'react';
import DynamicTable from './DynamicTable';
import InputJsonForm from './InputJsonFrom';
import SqlQueryForm from './SqlQueryForm';

export default function SqlOnJson(props) {
	const [rows, setRows] = React.useState([]);
	const [columns, setColumns] = React.useState([]);
	const [inputTable, setInputTable] = React.useState([]);

	return (
		<div>
			<InputJsonForm
				setRows={setRows}
				setColumns={setColumns}
				setInputTable={setInputTable}
			/>
			<SqlQueryForm
				rows={rows}
				columns={columns}
				setRows={setRows}
				setColumns={setColumns}
				inputTable={inputTable}
			/>
			<DynamicTable rows={rows} columnNames={columns} title={'Data'} />
		</div>
	);
}
