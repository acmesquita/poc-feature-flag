import { Request, Response } from "express"
import { z } from "zod"
import { CreateFeature, FindFeatureForUser } from "../../core/usecases"

export class FeatureController {

  constructor(
    private readonly findFeatureForUser: FindFeatureForUser,
    private readonly createFeature: CreateFeature
  ){}

  async create(request: Request, response: Response) {
    const schema = z.object({
      flag: z.string(),
    })

    const body = schema.safeParse(request.body)

    if (body.success) {
      const result = await this.createFeature.perform({
        feature: body.data.flag || '',
      })

      return response.json(result)
    } else {
      return response.status(404).json({ error: 'Invalid Params' })
    }
  }

  async index(request: Request, response: Response) {
    const schema = z.object({
      flag: z.string(),
      userId: z.string()
    })

    const body = schema.safeParse(request.query)

    if (body.success) {
      const result = await this.findFeatureForUser.perform({
        feature: body.data.flag || '',
        userId: body.data.userId || ''
      })

      return response.json(result)
    } else {
      return response.status(404).json({ error: 'Invalid Params' })
    }
  }
}
