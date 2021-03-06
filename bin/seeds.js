// Iteration #1
const mongoose = require('mongoose');
const modelDrone = require('../models/Drone.model')

require('../configs/db.config')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];


// Create drone DB ( with inital values)

modelDrone.create(drones).then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} Drones`);
    mongoose.disconnect();
}).catch((err) => {
    console.log(`An error occurred while getting drones from the DB: ${err}`)
});