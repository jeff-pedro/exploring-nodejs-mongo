const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mydb';

async function main() {
    // connect to the server
    await client.connect();

    const db = client.db(dbName);
    await db.createCollection('customers');

    return 'Collection created!';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());