// CRUD create read update delete

const {MongoClient, ObjectId} = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const connectionURL = process.env.MONGODB_URL
const databaseName = 'task-manager'

// const id = new ObjectId()
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: "Learn programming"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

    // db.collection('users').deleteMany({
    //     age: 22
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectId("61ef60230bd9fe3bb94a56d6")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').findOne({_id: new ObjectId("61ef60230bd9fe3bb94a56d6")}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch user!');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({age: '22'}).toArray((error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch user!');
    //     }

    //     console.log(user);
    // })
    // db.collection('users').find({age: '22'}).count((error, count) => {
    //     if(error) {
    //         return console.log('Unable to fetch user!');
    //     }

    //     console.log(count);
    // })

    // db.collection('users').insertOne({
    //     name: 'Hanif',
    //     age: '22'
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user!');
    //     }

    //     console.log(result);
    // })

    // db.collection('users').insertMany([{
    //     name: 'D',
    //     age: 22
    // }, {
    //     name: 'A',
    //     age: 21
    // }], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user!');
    //     }

    //     console.log(result);
    // })

    // db.collection('tasks').insertMany([{
    //     description: 'Read quran',
    //     completed: false
    // }, {
    //     description: 'Learn programming',
    //     completed: true
    // }, {
    //     description: 'Learn arabic',
    //     completed: false
    // }], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user!');
    //     }

    //     console.log(result);
    // })
})







































































































































































































































