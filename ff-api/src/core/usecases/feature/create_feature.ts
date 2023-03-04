import { InvalidParamsError } from "../../errors";
import { Feature } from "../../models";
import { FeatureRepository } from "../../repositories/feature_repository";

interface Params {
  feature: string
}

export class CreateFeature {
  constructor(
    private readonly featureRepository: FeatureRepository
  ){}

  async perform(params: Params): Promise<Feature> {

    if (!params.feature) {
      throw new InvalidParamsError()
    }

    const feature = await this.featureRepository.create(params)

    if (!feature) {
      throw new Error('Error when create feature')
    }

    return feature
  }
}