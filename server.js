const express = require('express')
const app = express()
const port = 3000

const userRouter = require('./routes/users')
const showRouter = require('./routes/shows')

app.get('/users', userRouter)
app.get('/shows', showRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})