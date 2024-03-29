const express = require("express")
require('dotenv').config()
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const userRouter = require("./src/routes/user.js")
const memberRouter = require("./src/routes/member.js")
const scheduleRouter = require("./src/routes/schedule.js")
const newsRouter = require("./src/routes/news.js")
const merchRouter = require("./src/routes/merch.js")
const songsRouter = require("./src/routes/songs.js")
const blogRouter = require("./src/routes/blog.js")
const path = require('path')

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: ["http://localhost:5173", "https://ngidol48.netlify.app"],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}))

// IMAGE ROUTE
app.use('/assets', express.static('public/userProfile'))
app.use('/profile', express.static('public/member-profile'))
app.use('/schedule/images', express.static('public/schedule'))
app.use('/news/images', express.static('public/news'))
app.use('/blog/cover', express.static('public/blog'))

// API ROUTE
app.use("/api/v1/user", userRouter)
app.use('/api/v1/member', memberRouter)
app.use('/api/v1/schedule', scheduleRouter)
app.use('/api/v1/news', newsRouter)
app.use('/api/v1/merch', merchRouter)
app.use('/api/v1/song', songsRouter)
app.use('/api/v1/blog', blogRouter)


app.listen(3000, () => {
  console.log("server running at port 3000")
})





