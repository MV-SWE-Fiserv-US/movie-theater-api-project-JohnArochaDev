const express = require('express')
const app = express()
const port = 3000

const userRouter = require('./routes/users')
const showRouter = require('./routes/shows')

app.use('/users', userRouter)
app.use('/shows', showRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})