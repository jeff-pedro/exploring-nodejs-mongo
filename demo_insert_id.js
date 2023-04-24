const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mydb';

async function main() {
    // connection
    await client.connect();

    // create db
    const db = client.db(dbName);

    // insert documents with id
    const obj = [
        { _id: 154, name: 'Chocolate Heaven'},
        { _id: 155, name: 'Tasty Lemon'},
        { _id: 156, name: 'Vanilla Dream'}
      ];

    const result = await db.collection('products').insertMany(obj);
    
    return result;
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());