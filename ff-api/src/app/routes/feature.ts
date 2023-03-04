import { Router } from 'express'
import { makeFeatureController } from '../factories'

const route = Router()
const controller = makeFeatureController()

route.get('/', (req, res) => controller.index(req, res) )
route.post('/', (req, res) => controller.create(req, res) )

export {
  route
}
