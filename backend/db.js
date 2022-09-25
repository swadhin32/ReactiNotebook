const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true&tls=false"

const connectToMongo = ()=> {
    mongoose.connect(mongoURI, () => {
        console.log("Connected Successfully");
        })
}

module.exports = connectToMongo

