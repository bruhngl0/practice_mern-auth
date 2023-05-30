const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const goalRoute = require("./routes/goalRoute")
const userRoutes = require("./routes/userRoutes")
const {errorHandler} = require('./middlewares/errorHandler')
const connectDB = require("./config/db")



PORT = process.env.PORT || 2000

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/api/goals' , goalRoute)
app.use('/api/users', userRoutes)
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})