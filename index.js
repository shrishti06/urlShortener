const express = require('express')
const connectDB = require('./connect')
const path = require('path')
const urlRouter = require('./routes/url')
const staticRouter = require('./routes/staticRouter')
const userRouter = require('./routes/user')
const cookieParser = require('cookie-parser')
const {restrictedToUser,checkAuth} = require('./middleware/auth')

connectDB('mongodb://localhost:27017/url').then(()=> console.log('DB connected'))


const PORT = 8001;
const app = express();
app.set('view engine', 'ejs')
app.set("views",path.resolve('./views') )
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/url',restrictedToUser,urlRouter)
app.use('/', checkAuth, staticRouter)
app.use('/', userRouter)

app.listen(PORT, ()=> console.log('Server Started'))
