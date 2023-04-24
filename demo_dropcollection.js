const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mydb';

async function main() {
    // connection
    await client.connect();

    // create db and collection
    const db = client.db(dbName);

    // delete collection via object
    const result = await db.dropCollection('products');

    if (result === true) return 'Collection deleted';
    
    return 'Something go wrong!'
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());