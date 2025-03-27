const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL // || "mongodb://localhost:27017/my_database"

console.log(process.env.MONGODB_URL);


const databaseconnect = () => {
    mongoose
   .connect(MONGODB_URL)
   .then((conn)=> console.log(`conneted to ${conn.connection.host}`))
   .catch((err)=> console.log(err.message))
}

module.exports = databaseconnect;
