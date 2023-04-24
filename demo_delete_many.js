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

    // delete
    const query = { address: /^O/ };
    const result = await collection.deleteMany(query);

    return `${result.deletedCount} document(s) deleted`;
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());