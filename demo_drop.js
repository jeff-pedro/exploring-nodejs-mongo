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

    // drop collection
    const result = await collection.drop();

    if (result === true) return 'Collection deleted';
    
    return 'Something go wrong!'
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());