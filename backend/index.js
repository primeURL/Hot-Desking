const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectToMongo = require('./db')
const routes = require('./routes/routes')
require('dotenv').config()
const app = express();
connectToMongo()
app.use(bodyParser.json())
app.use(cors())


app.use("/user", routes);

app.listen(8080,()=>console.log('Server started at port 8080'))