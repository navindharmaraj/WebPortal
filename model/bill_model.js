const MongoClient = require('mongoDb').MongoClient
const uri =
    "mongodb+srv://dbuser666:sit725DataUser@cluster0.q6kyg.mongodb.net/?retryWrites=true&w=majority";
const dbclient = new MongoClient(uri, { useNewUrlParser: true });

exports.addCollection = async function (collectionName, dataObj) {

    var dbConnection = await dbclient.connect();
    var db = await dbConnection.db('ageig');
    return await db.collection(collectionName).insertOne(dataObj)
   
}

exports.getUserBills = async function (user) {
    try {
        var dbConnection = await dbclient.connect();
        var db = await dbConnection.db('ageis');
        var collecationData = await db.collection('customer_bills').find({userid:user}).toArray();
        return collecationData
    } catch (error) {
        console.log(error)
    }

}

exports.testConnection = async function (collectionName){
    console.log(collectionName)
    client.connect((err,db)=>{
        projectCollection = client.db().collection(collectionName);
        if(!err){
            console.log('Mongo DB COnnected');

        }
        else{
            console.log("DB Error : ", err);
            process.exit(1)
        }
    });
}

