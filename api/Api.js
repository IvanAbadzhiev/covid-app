const base_url = "https://api.covid19api.com/";

export const getFirstTenCountries = () => {
	return new Promise((resolve, reject) => {
		const endpoint = `${base_url}/summary`;
			fetch(endpoint)
				.then(res => res.json())
				.then((data) => resolve(data))
				.catch(err => reject(err));
	});
};

export const getDataByCountry = (country) => {
	return new Promise((resolve, reject) => {
		const endpoint = `${base_url}/total/country/${country}`;
		console.log(endpoint);
		fetch(endpoint)
				.then(res => res.json())
				.then((data) => resolve(data))
				.catch(err => reject(err));
	});
};