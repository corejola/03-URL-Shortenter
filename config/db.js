const mongoose = require('mongoose');
require('dotenv').config();

const mongodbUri = process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}.cyea3.mongodb.net/URL-Shortener?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(mongodbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected')
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}


module.exports = connectDB;