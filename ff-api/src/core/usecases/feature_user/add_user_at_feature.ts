import { InvalidParamsError } from "../../errors";
import { FeatureRepository, FeatureUserRepository } from "../../repositories";

interface Params {
  feature: string
  userId: string
}

export class AddUserAtFeature {
  constructor(
    private readonly featureRepository: FeatureRepository,
    private readonly featureUserRepository: FeatureUserRepository
  ){}

  async perform(params: Params): Promise<boolean> {

    if (!params.feature && !params.userId) {
      throw new InvalidParamsError()
    }

    const feature = await this.featureRepository.findByFlag({ flag: params.feature })

    if (!feature) {
      await this.featureRepository.create({ feature: params.feature })
    }

    const result = await this.featureUserRepository.addUserToFeature(params)

    return result
  }
}
