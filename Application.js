const express = require('express')
const app = express()
const port = 3001

app.get('/rich', (req, res) => {
  res.send('Ciao a tutti!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
