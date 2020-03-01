const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Nab:hussain@cluster0-fwz7m.mongodb.net/fyp?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("fyp").collection("datetime");
  // perform actions on the collection object

    
});