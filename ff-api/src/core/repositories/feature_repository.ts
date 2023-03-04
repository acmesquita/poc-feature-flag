import type { Feature } from '../models';

export interface FindByUserParams {
  userId: string
  feature: string
}

export interface FindByFlagParams {
  flag: string
}

export interface CreateParams {
  feature: string
}

export interface FeatureRepository {
  findByUser(params: FindByUserParams): Promise<Feature | null>
  findByFlag(params: FindByFlagParams): Promise<Feature | null>
  create(params: CreateParams): Promise<Feature>
}