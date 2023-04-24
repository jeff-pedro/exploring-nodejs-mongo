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
    const query = { address: /^S/ };
    const newValues = { $set: { name: 'Minnie' } };
    const result = await collection.updateMany(query, newValues);

    return `${result.modifiedCount} document(s) updated`;
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());