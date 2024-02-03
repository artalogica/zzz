require('dotenv').config();
const { MongoClient } = require('mongodb')

const URL = `mongodb+srv://suli:tartanhacks2024@zzzcluster.qj0ouxr.mongodb.net/`

let dbConnection;

module.exports = {
    connectToDb: (callback) => {
        MongoClient.connect(URL)
        .then((cleint) => {
            dbConnection = cleint.db();
            return callback();
        })
        .catch(err => {
            console.log(err);
            return callback(err);
        })
    },
    getDb: () => dbConnection
}