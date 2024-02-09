const getDataFromApi = () => {
    return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.map((character) => {
            return{
                picture: character.image,
                name: character.name,
                species: character.species,
                id: character.id,
                house: character.house
            };
        });
        return cleanData;
    });
};

export default getDataFromApi;