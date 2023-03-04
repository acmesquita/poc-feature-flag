import { Request, Response } from "express"
import { z } from "zod"
import {
  AddUserAtFeature,
  DisableUserAtFeature,
  ListFeaturesWithUsers
} from "../../core/usecases"

export class FeatureUserController {

  constructor(
    private readonly addUserAtFeature: AddUserAtFeature,
    private readonly disableUserAtFeature: DisableUserAtFeature,
    private readonly listFeaturesWithUsers: ListFeaturesWithUsers
  ) { }

  async create(request: Request, response: Response) {
    try {
      const schema = z.object({
        flag: z.string(),
        userId: z.string(),
      })

      const body = schema.safeParse(request.body)

      if (body.success) {
        const result = await this.addUserAtFeature.perform({
          feature: body.data.flag || '',
          userId: body.data.userId || ''
        })

        if (result) {
          return response.status(204).json(result)
        } else {
          return response.status(400).json({ error: 'Flag were created' })
        }
      }

      return response.status(400).json({ error: 'Invalid Params' })

    } catch (error) {
      return response.status(500).json({ error: 'Internal Error' })
    }
  }

  async delete(request: Request, response: Response) {
    const schema = z.object({
      flag: z.string(),
      userId: z.string(),
    })

    const body = schema.safeParse(request.body)

    if (body.success) {
      const result = await this.disableUserAtFeature.perform({
        feature: body.data.flag || '',
        userId: body.data.userId || ''
      })

      if (result) {
        return response.status(204).json(result)
      } else {
        return response.status(404).json({ error: 'User not found' })
      }
    } else {
      return response.status(400).json({ error: 'Invalid Params' })
    }
  }

  async listAll(request: Request, response: Response) {
    const result = await this.listFeaturesWithUsers.perform()

    return response.json(result)
  }
}
