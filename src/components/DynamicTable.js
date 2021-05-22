import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@material-ui/core';

export default function DynamicTable(props) {
	if (
		props.rows === undefined ||
		props.rows == null ||
		props.rows.length === 0 ||
		props.columnNames === undefined ||
		props.columnNames == null ||
		props.columnNames.length === 0
	) {
		return (
			<Paper>
				<Typography variant="h4" color="inherit" component={'span'}>
					Empty Response
				</Typography>
			</Paper>
		);
	}

	return (
		<div>
			<Paper>
				<Typography variant="h4" color="inherit">
					{props.title}
				</Typography>
				<TableContainer>
					<Table size={'medium'}>
						<TableHead>
							<TableRow key={'headers'}>
								{props.columnNames.map((columnName, index) => {
									return (
										<TableCell key={index} align="center">
											{columnName}
										</TableCell>
									);
								})}
							</TableRow>
						</TableHead>
						<TableBody>
							{props.rows.map((row, index) => {
								return (
									<TableRow key={index}>
										{row.map((cell, index) => {
											return (
												<TableCell
													key={index}
													align="right"
												>
													{cell}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</div>
	);
}

DynamicTable.defaultProps = {
	title: 'No Title',
};
