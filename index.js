const express = require('express')
const connectDB = require('./connect')
const router = require('./routes/url')

connectDB('mongodb://localhost:27017/url').then(()=> console.log('DB connected'))


const PORT = 8001;
const app = express();
app.use(express.json())
app.use('/api/url', router)

app.listen(PORT, ()=> console.log('Server Started'))
