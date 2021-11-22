const tasks = require("./routes/tasks")
const connection =require("./db")
const path = require('path')
const cors = require('cors')
const express = require('express')
const app = express()

connection()

app.use(express.json())
app.use(cors())

app.use("/api/tasks", tasks)

app.use(express.static(path.join(__dirname, "build")))
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}...`))