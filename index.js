const express = require("express")

const app = express()

app.use(express.json())

app.get("/reset_password", (req, res) => {
    const { token } = req.query
    console.log(token)
    res.sendFile(__dirname + "/reset.html")
})

app.listen(5002, () => {
    console.log("listen on port 5002")
})
