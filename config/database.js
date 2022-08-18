const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://MoysarLulu:MoysarLulu12@cluster0.qpknrfr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err) throw err;
});
const collection = client.db("newtest").collection("newcollection");
module.exports = { collection, ObjectId }