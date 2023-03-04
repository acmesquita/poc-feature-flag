import { FeatureUsers } from "../../models"
import { FeatureUserRepository } from "../../repositories"

export class ListFeaturesWithUsers {

  constructor(
    private readonly featureUserRepository: FeatureUserRepository
  ){}

  async perform(): Promise<FeatureUsers[]> {
    const features = await this.featureUserRepository.findAll()
    return features
  }
}
