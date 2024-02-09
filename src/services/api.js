const getDataFromApi = () => {
    return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.results.map((character) => {
            return{
                picture: data.result.image,
                name: data.result.name,
                species: data.result.species
            };
        });
        return cleanData;
    });
};

export default getDataFromApi;