const express = require("express");
const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose");
const routes = require("./routes");
const cors = require('cors')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

dotenv.config()

const app = express()

const port = process.env.PORT || 3001
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())


routes(app);


mongoose.connect(`${process.env.MONGO_DB}`)
.then(() =>{
  console.log('Connect db success')
})
.catch((err) => {
  console.log(err)
})


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })