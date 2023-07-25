const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const connectToMongo = require('./db')
const authRoutes = require('./routes/auth')
const roomRoutes = require('./routes/roomRoutes')
const bookedRoomRoutes = require('./routes/bookedRoomRoutes')
connectToMongo()
/* This code is for refrence
// const Redis = require('redis')
// const redisClient = Redis.createClient()
// async function RedisConnect() {
//     await redisClient.connect();
// }
// RedisConnect()
*/
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.get('/',(req,res)=>{
    res.send('Inside index.js')
})

app.get('/flushall',async(req,res)=>{
    try {
        const resp = await redisClient.flushAll()
        console.log(resp);
        res.status(200).send(resp)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})
app.use("/user", authRoutes);
app.use("/room", roomRoutes);
app.use("/bookedrooms", bookedRoomRoutes);

app.listen(8000,()=>console.log('Server started at port 8000'))