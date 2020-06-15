import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getDataByCountry } from "../../../api/Api";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Country = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const { country } = props.match.params;

		getDataByCountry(country).then((data) => {
			setData(data);
		}).catch((err) => {
			throw("Couldn't fetch the data");
		})
	}, []);

	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Country</TableCell>
						<TableCell align="right">Date</TableCell>
						<TableCell align="right">Active</TableCell>
						<TableCell align="right">Confirmed</TableCell>
						<TableCell align="right">Deaths</TableCell>
						<TableCell align="right">Recovered</TableCell>
					</TableRow>
				</TableHead>
						
				<TableBody>
					{data && data.length && data.map((row) => (
						<TableRow key={row.Date}>
							<TableCell component="th" scope="row">
								<a onClick={() => selectCountry(row)}>{row.Country}</a>
							</TableCell>
							<TableCell align="right">{row.Date}</TableCell>
							<TableCell align="right">{row.Active}</TableCell>
							<TableCell align="right">{row.Confirmed}</TableCell>
							<TableCell align="right">{row.Deaths}</TableCell>
							<TableCell align="right">{row.Recovered}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
		
	);
};

export default withRouter(Country);