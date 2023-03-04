import { ListFeaturesWithUsers } from "../../core/usecases"
import { AddUserAtFeature } from "../../core/usecases/feature_user/add_user_at_feature"
import { DisableUserAtFeature } from "../../core/usecases/feature_user/disable_user_at_feature"
import { FeatureUserController } from "../controller/feature_user_controller"
import { FeaturePrismaRepository } from "../repositories/prisma/feature"
import { FeatureUserPrismaRepository } from "../repositories/prisma/feature_user"

export const makeFeatureUserController = () => {
  const featureRepo = new FeaturePrismaRepository()
  const featureUserRepo = new FeatureUserPrismaRepository()

  const addUserAtFeature = new AddUserAtFeature(
    featureRepo,
    featureUserRepo
  )

  const disableUserAtFeature = new DisableUserAtFeature(
    featureUserRepo
  )

  const listFeaturesWithUsers = new ListFeaturesWithUsers(
    featureUserRepo
  )

  const controller = new FeatureUserController(
    addUserAtFeature,
    disableUserAtFeature,
    listFeaturesWithUsers
  )

  return controller
}
