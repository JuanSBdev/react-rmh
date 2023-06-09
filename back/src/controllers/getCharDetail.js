const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');
const { response } = require('express');

function getCharDetail(req, res){
    const {detailId} = req.params;    
    axios(URL + detailId)
    .then( response =>{
        const data = response.data;
        const character = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin.name,
        };
        res.status(200).json(character)
    },
    ), (error)=> res.status(500).json(error.message);
}
module.exports = { getCharDetail }