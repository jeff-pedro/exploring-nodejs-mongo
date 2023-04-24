const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mydb';

async function main() {
    // connection
    await client.connect();

    // create db and collection
    const db = client.db(dbName);
    const collection = db.collection('orders');

    // join documents
    const result = await collection.aggregate([
        { $lookup:
            {
                from: 'products',
                localField: 'product_id',
                foreignField: '_id',
                as: 'orderdetails'
            }
        }
    ]).toArray();

    return JSON.stringify(result, null, 2);
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close()); 