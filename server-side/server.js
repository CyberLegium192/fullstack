const express = require("express")
require('dotenv').config()
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const userRouter = require("./src/routes/user.js")
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ['GET', 'POST', 'PATCH'],
  credentials: true
}))

app.use("/user", userRouter)











app.listen(3000, () => {
  console.log("server running")
  
})