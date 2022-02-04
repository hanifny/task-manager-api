const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

// const multer = require('multer')
// const upload = multer({
//     dest: 'images'
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('This site is under maintenance, please try back soon!')
// })

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '0 seconds'})
//     console.log(token);

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data);
// }

// myFunction()