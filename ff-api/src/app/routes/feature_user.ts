import { Router } from 'express'
import { makeFeatureUserController } from '../factories'

const route = Router()
const controller = makeFeatureUserController()

route.post('/addUser', (req, res) => controller.create(req, res) )
route.delete('/disableUser', (req, res) => controller.delete(req, res) )

export {
  route
}