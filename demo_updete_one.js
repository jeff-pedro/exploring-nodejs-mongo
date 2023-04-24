const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mydb';

async function main() {
    // connection
    await client.connect();

    // create db and collection
    const db = client.db(dbName);
    const collection = db.collection('customers');

    // update document
    const query = { address: 'Valley 345' };
    const newValues = { $set: { name: 'Mickey', address: 'Cannyon 123' } };
    await collection.updateOne(query, newValues);

    return '1 document updated';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());