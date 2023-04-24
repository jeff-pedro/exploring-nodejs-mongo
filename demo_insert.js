const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mydb';

async function main() {
    // connection
    await client.connect();

    // create db
    const db = client.db(dbName);

    // insert document
    const obj = { product_id: 154, status: 1 };
    await db.collection('orders').insertOne(obj);
    
    return '1 document inserted';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());