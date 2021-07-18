const MongoClient = require('mongodb').MongoClient;
const config = require('../../config.json');
const url = config.mongodb.url;
const client = new MongoClient(url);

let connection;
let database;

module.exports = {
  connect: async function() {
    if(database) {
      return;
    } else {
      try {
        connection = await client.connect();
        database = client.db(config.mongodb.database);
        return(database);
      } catch(error) {
        console.log("Failed to connect to mongodb");
        console.log(error);
        return false;
      }
    }
  },
  disconnect: async function() {
    if(!connection) {
      return;
    } else {
      connection.close();
      return;
    }
  }
}
