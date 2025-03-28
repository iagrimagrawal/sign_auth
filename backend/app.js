const express = require('express')
const authRouter = require('./router/authRoute')
const databaseconnect = require('./config/databaseConfig')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()

databaseconnect()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true
}))


app.use('/api/auth',authRouter);

app.use('/',(req,res)=>{
    res.status(200).json({
        data: "JWT AuthSever"
    })
})

module.exports = app;

