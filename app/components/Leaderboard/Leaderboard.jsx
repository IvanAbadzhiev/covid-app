import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

import DataContext from "../../contexts/DataContext";

const Leaderboard = () => {
	const [sort, setSort] = useState("desc");

	const useStyles = makeStyles({
		table: {
		  minWidth: 650,
		},
	});

	const classes = useStyles();

	const createSortHandler = () => {
		const sortType = sort === "desc" ? "asc" : "desc";
		setSort(sortType);
	};

	const sortData = (data) => {
		let sortFunc;

		if(sort === "asc") {
			sortFunc = (a, b) => a.TotalConfirmed - b.TotalConfirmed;
		} else {
			sortFunc =(a, b) => b.TotalConfirmed - a.TotalConfirmed;
		}
		const sortedData = data.sort(sortFunc);
		return sortedData;
	};

	return (
		<DataContext.Consumer>
			{({ data, selectCountry }) => (
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Country</TableCell>
								<TableCell align="right">
									<TableSortLabel
										active={true}
										direction={sort === "desc" ? "desc" : 'asc'}
										onClick={createSortHandler}
									>
										Total Confirmed
									</TableSortLabel>
								</TableCell>
								<TableCell align="right">Total Deaths</TableCell>
								<TableCell align="right">Total Recovered</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data && sortData(data).map((row) => (
								<TableRow key={row.CountryCode}>
									<TableCell component="th" scope="row">
										<a onClick={() => selectCountry(row)}>{row.Country}</a>
									</TableCell>
									<TableCell align="right">{row.TotalConfirmed}</TableCell>
									<TableCell align="right">{row.TotalDeaths}</TableCell>
									<TableCell align="right">{row.TotalRecovered}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</DataContext.Consumer>
	);
};

export default Leaderboard;