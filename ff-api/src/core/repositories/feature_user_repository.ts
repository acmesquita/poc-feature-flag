import { Feature } from "../models"

export interface AddUserToFeatureParams {
  userId: string
  feature: string
}

export interface FindParams {
  userId: string
  feature: string
}

export interface FeatureUserRepository {
  addUserToFeature(params: AddUserToFeatureParams): Promise<boolean>
  find(params: FindParams): Promise<Feature>
  destroy(params: FindParams): Promise<boolean>
}