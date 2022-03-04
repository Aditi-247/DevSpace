const MongoClient = require('mongodb').MongoClient;
const port = 8000;
const dotenv = require('dotenv')
dotenv.config()

const url = 'mongodb://localhost:27017';

const url2 = 'mongodb+srv://Aditi24:jyH9tCybaaPzjcqB@cluster0.jcfif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

MongoClient.connect(url, (err, client)=>{
    if(err) throw err;

    console.log("db connected");
    const app = require('./app');
    app.listen(port, ()=>{
        console.log("server listening on ", port)
    })
});