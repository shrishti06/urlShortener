const express = require('express')
const connectDB = require('./connect')
const path = require('path')
const urlRouter = require('./routes/url')
const staticRouter = require('./routes/staticRouter')
const userRouter = require('./routes/user')

connectDB('mongodb://localhost:27017/url').then(()=> console.log('DB connected'))


const PORT = 8001;
const app = express();
app.set('view engine', 'ejs')
app.set("views",path.resolve('./views') )
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/url', urlRouter)
app.use('/', staticRouter)
app.use('/', userRouter)

app.listen(PORT, ()=> console.log('Server Started'))
