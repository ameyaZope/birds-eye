import { Grid, Paper, Typography } from '@material-ui/core';

export default function GettingStartedPage() {
	const sample_json_data_1 = [
		{
			id: 1,
			name: 'John Snow',
			userId: 'U001',
			email: 'johnsnow@gmail.com',
			address: {
				fort: 'Winterfell',
				geo: {
					lat: '-37.3159',
					lng: '81.1496',
				},
			},
			phone: '1-770-736-8031 x56442',
		},
		{
			id: 2,
			name: 'Tyrion Lannister',
			userId: 'U002',
			email: 'tyrion.lannister@gmail.com',
			address: {
				fort: 'Red Keep',
				city: "King's Landing",
				geo: {
					lat: '-43.9509',
					lng: '-34.4618',
				},
			},
			phone: '010-692-6593 x09125',
		},
		{
			id: 3,
			name: 'Daenerys Targaryen',
			userId: 'U003',
			email: 'daenerys.targaryen@gmail.com',
			address: {
				house: 'Estate of Illyrio Mopatis',
				city: 'Pentos',
				zipcode: '59590-4157',
			},
			phone: '1-463-123-4447',
		},
	];

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Paper>
					<Typography component={'span'}>
						This is a tool with which you can run sql like queries
						on json objects. Yes !! Its that Simple.
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper align="left">
					<Typography align="left">
						{
							<pre>
								{JSON.stringify(sample_json_data_1, null, 2)}
							</pre>
						}
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper>
					<Typography>
						The syntax of the query is very sql like. One major
						difference is that given that here the user doesnt know
						the name of the table, where the name of the table is
						requried, simply use a '?'. For example, select * from ?
						The aforementioned command command selects all the
						entries that you put as input to this tool.
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper>
					<Typography>
						This tool can handle loosely structured data. If you
						observer the above data you can easil see that like
						address.fort are present in one but are not present in
						other json objects. If you want to fetch all the rows
						where the address.fort is non null you can use the
						following query. select * from ? where address->fort is
						not null
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
}
