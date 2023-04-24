const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

(async () => {
    // Connection
    try {
        await client.connect();
        console.log('Connected!');
    } catch (err) {
        throw err;
    }
})();