import React, { useState, useEffect, createContext } from "react";
import { getFirstTenCountries, getDataByCountry } from "../../../api/Api";
import Button from '@material-ui/core/Button';
import Modal from "../../components/Modal/Modal";
import Sidebar from "../../components/Sidebar/Sidebar";

import DataContext from "../../contexts/DataContext";

import classes from "./style.css";



const Home = () => {
	const [open, setOpen] = useState(false);
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [selectedCountryData, setSelectedCountryData] = useState(null);

	const loadData = () => {
		setOpen(true);

		getFirstTenCountries().then((data) => {
			const firstTen = data.Countries.slice(0, 10);
			setCountries(firstTen);
		}).catch(() => {
			throw("Couldn't fetch the data");
		});
	}

	const handleClose = () => {
		setOpen(false);
	}

	useEffect(() => {
		if(selectedCountry && Object.keys(selectedCountry).length) {
			getDataByCountry(selectedCountry.Slug).then((data) => {
				setSelectedCountryData(data);
			}).catch(() => {
				throw("Couldn't fetch the data");
			})
		}
	}, [selectedCountry]);

	return (
		<DataContext.Provider
			value={{ data: countries, selectCountry: setSelectedCountry }}>
			<div className={classes.center}>
				<Button variant="contained" color="primary" onClick={loadData}>
					Load data
				</Button>

				<Modal data={countries} handleClose={handleClose} open={open}/>
				<Sidebar countries={selectedCountryData} country={selectedCountry}  open={!!selectedCountry} handleClose={() => setSelectedCountry(null)}/>
			</div>
		</DataContext.Provider>
	);
}

export default Home;