const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mydb';

async function main() {
    // connection
    await client.connect();

    // create db
    const db = client.db(dbName);

    // find one document
    const result = await db.collection('customers').findOne();
    
    return result.name;
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());