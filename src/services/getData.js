const getData = (query) => {
	if (!query) {
		return Promise.resolve([]);
	}

	return fetch(`https://images-api.nasa.gov/search?q=${query}`, { method: 'GET' })
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			return data.collection.items.map((x) => x.data);
		})
		.catch(function(err) {
			console.log(err);
		});
};

export default getData;
