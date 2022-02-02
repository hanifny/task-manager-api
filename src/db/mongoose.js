const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL)

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true 
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: '    Learn the religion    ',
//     completed: true
// })

// task.save()
// .then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log(error);
// })

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if(!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },  
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minLength: 7,
//         validate(value) {
//             if(value.toLowerCase().includes('password')) {
//                 throw new Error('Password can\'t contain \'password\'')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0, // kalau kosong, maka akan terisi 0
//         validate(value) {
//             if(value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '   Hanif Nuryanto   ',
//     email: '   HanifNY@GMAIL.COM   ',
//     password: 'passwosrd123',
//     age: 22
// })

// me.save().then((me) => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error', error);
// })