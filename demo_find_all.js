const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mydb';

async function main() {
    // connection
    await client.connect();

    // create db
    const db = client.db(dbName);

    // find all documents
    const result = db.collection('customers').find().toArray();

    return result;
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());