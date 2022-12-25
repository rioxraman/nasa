// const { getAllPlanets } = require('../../models/planets.models')

// async function httpGetAllPlanets(req, res) {
    
//     console.log(await getAllPlanets())
//     return res.status(200).json(await getAllPlanets());
// }

// module.exports = { httpGetAllPlanets };

const {planets} = require('../../models/planets.models')

function getAllPlanets(req, res) {
    
    
    return res.status(200).json(planets);
}

module.exports = { getAllPlanets };