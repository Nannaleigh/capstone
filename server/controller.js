// const req = require('express/lib/request');
// const Sequelize = require('sequelize');
// const {CONNECTION_STRING} = process.env

// const sequelize = new Sequelize (CONNECTION_STRING, {
//     dialect: 'postgres', 
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// });

// module.exports = {
//     getTodo: (req, res) => {
//         sequelize.query (`
//         SELECT * FROM todo`)
//         .then(dbRes => 
//             res.status(200).send(dbRes))
//         .catch(err => console.log(err))
//     }
// }

