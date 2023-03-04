import express from 'express'
import cors from 'cors'
import { featureRoute, featureUserRoute } from './app/routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(featureRoute)
app.use(featureUserRoute)

app.listen(3333, () => {
  console.log('Server running in http://localhost:3333')
})