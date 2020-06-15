import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Sidebar = (props) => {
	const { open, handleClose, countries, country } = props;

	const rows = [];

	if(countries) {
		const lastRecord = countries[countries.length - 1];
		rows.push(lastRecord);
	}

	const goToHistoryData = (country) => {
		// using country because it has slug
		props.history.push(`/${country.Slug}`)
	};

	return (
		<Drawer anchor="right" open={open} onClose={handleClose}>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Country</TableCell>
							<TableCell align="right">Active</TableCell>
							<TableCell align="right">Confirmed</TableCell>
							<TableCell align="right">Deaths</TableCell>
							<TableCell align="right">Recovered</TableCell>
						</TableRow>
					</TableHead>
					
					<TableBody>
						{rows.length && rows.map((row) => (
							<TableRow key={row.CountryCode}>
								<TableCell component="th" scope="row">
									<a onClick={() => selectCountry(row)}>{row.Country}</a>
								</TableCell>
								<TableCell align="right">{row.Active}</TableCell>
								<TableCell align="right">{row.Confirmed}</TableCell>
								<TableCell align="right">{row.Deaths}</TableCell>
								<TableCell align="right">{row.Recovered}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Button onClick={() => goToHistoryData(country)} variant="contained">See history data</Button>
		</Drawer>
	);
};

Sidebar.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	countries: PropTypes.array,
	country: PropTypes.object
};

export default withRouter(Sidebar);