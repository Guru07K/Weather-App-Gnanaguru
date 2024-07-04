const mongoose = require('mongoose');

const databaseConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URI).then(
        (con) =>{
            console.log(`Mongodb is  connected to host ${con.connection.host}`);
        }
    )
}

module.exports = databaseConnect;
