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

    // sort alphabetically
    const mysort = { name: 1 }; // -1 to descending  
    const result = await collection.find().sort(mysort).toArray();

    return result;
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());