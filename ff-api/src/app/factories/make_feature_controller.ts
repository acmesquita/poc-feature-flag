import { CreateFeature } from "../../core/usecases"
import { FindFeatureForUser } from "../../core/usecases/feature_user/find_feature_for_user"
import { FeatureController } from "../controller/feature_controller"
import { FeaturePrismaRepository } from "../repositories/prisma/feature"
import { FeatureUserPrismaRepository } from "../repositories/prisma/feature_user"

export const makeFeatureController = () => {
  const repoFeature = new FeaturePrismaRepository()
  const repoFeatureUser = new FeatureUserPrismaRepository()

  const findFeatureForUser = new FindFeatureForUser(repoFeatureUser)
  const createFeature = new CreateFeature(repoFeature)

  const controller = new FeatureController(
    findFeatureForUser,
    createFeature
  )

  return controller
}
