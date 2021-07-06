const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const DB_NAME = process.env.DB_NAME;
const USER_NAME = process.env.USER_NAME;
const USER_PASSWD = process.env.USER_PASSWD;
const HOST_NAME = process.env.HOST_NAME; //クラスター名やホスティング先によって変わる

const uri = `mongodb+srv://${USER_NAME}:${USER_PASSWD}@${HOST_NAME}/${DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log("Connected successfully to server");
    // perform actions on the collection object
    const hoge = [
        { c: 1 },
        { d: 1,
          name: "masahiro",
          age: 24
        }
    ];

    collection.insertMany(hoge, (err, result) => {
        console.log(err)
        console.log(hoge);
        console.log('Inserted 3 documents into the collection');
        console.log(result);
        client.close();
    })

});
