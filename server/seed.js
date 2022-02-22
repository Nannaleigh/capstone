require('dotenv').config()
const { CONNECTION_STRING } = process.env || 8080
const req = require('express/lib/request');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl : {
            rejectUnauthorized: false
        }
    }
 })

 module.exports = {
     seed: (req, res) => {
         sequelize.query(`
         
         drop table if exists todo;       
         create table todo (
             todo_id serial primary key,
             description VARCHAR(255)
         );

         INSERT INTO todo (description)
         VALUES ('Dog Care Plan'), ('Check local vets'), ('Look into training classes'), ('Know what size dog'), ('Prepare dog food'), ('Dog Crate'), ('Food and Water Bowls'), ('Collar'), ('Leash'), ('Harness'), ('Toys'), ('First vet appointment')
         `).then(() => {
             console.log('DB seeded!')
            res.sendStatus(200) 
         }).catch(err => console.log('Error seeding DB', err))
     }
 }

