const express = require('express')
const app = express()
const port = 5000

// quick backend api
app.get("/api", (req, res) => {
    res.json(
        {
            "dogs": ["Johny", "Rocky", "Anaya", "Goya", "Linda"]
        })
})

app.listen(port, () => { console.log(`Server is running on ${port}`) })