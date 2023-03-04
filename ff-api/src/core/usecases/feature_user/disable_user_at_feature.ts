import { InvalidParamsError } from "../../errors"
import { FeatureUserRepository } from "../../repositories"

interface Params {
  feature: string
  userId: string
}

export class DisableUserAtFeature {
  constructor(
    private readonly featureUserRepository: FeatureUserRepository
  ){}

  async perform(params: Params): Promise<boolean> {
    if (!params.feature && !params.userId) {
      throw new InvalidParamsError()
    }

    const feature = await this.featureUserRepository.destroy(params)

    return feature
  }
}