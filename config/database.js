const mongoose = require('mongoose');

const { MONGO_URI} = process.env;

exports.connect = () => {
    ///connect to the database
    mongoose.connect(MONGO_URI,  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    }).then(() => {
        console.log('Connected successfully !')
    }).catch((error) => {
        console.log('Error connecting to the database');
        console.log(error);
        process.exit(1);
    });

    
}