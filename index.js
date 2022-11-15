const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const Contact = require("./model")
const { DB_HOST, PORT = 3333 } = process.env
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello")
})

app.post("/contacts", async (req, res) => {
    const { name, number, id: _id } = await Contact.create(req.body)
    res.status(201).json({ name, number, id })
})


app.use((req, res, next) => {
    res.status(404).send("Page not found")
})

app.use((err, req, res, next) => {
    const { message = "Server error", status = 500 } = err
    res.status(status).send(message)
})

mongoose.connect(DB_HOST, () => {
    console.log("DB connect!!!")
})
app.listen(4000, () => {
    console.log("Welcome to server 4000")
})