import express from 'express'
import cors from 'cors'

const app = express()

//* Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//* Routes

export default app
