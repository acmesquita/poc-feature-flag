import { InvalidParamsError } from "../../errors"
import { Feature } from "../../models"
import { FeatureUserRepository } from "../../repositories"

interface Params {
  feature: string
  userId: string
}

export class FindFeatureForUser {

  constructor(
    private readonly featureUserRepository: FeatureUserRepository
  ){}

  async perform(params: Params): Promise<Feature> {

    if (!params.feature && !params.userId) {
      throw new InvalidParamsError()
    }

    const feature = await this.featureUserRepository.find(params)

    if (!feature) {
      return {
        flag: params.feature,
        value: false
      }
    }

    return feature
  }
}
