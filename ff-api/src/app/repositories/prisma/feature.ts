import { Feature } from "../../../core/models";
import { CreateParams, FeatureRepository, FindByFlagParams, FindByUserParams } from "../../../core/repositories/feature_repository";
import { prisma } from "../../database/prisma_client";

export class FeaturePrismaRepository implements FeatureRepository {
  async create(params: CreateParams): Promise<Feature> {
    const result = await prisma.feature.create({
      data: {
        flag: params.feature
      }
    })

    return result
  }

  async findByFlag(params: FindByFlagParams): Promise<Feature> {
    const result = await prisma.feature.findFirst({
      where: {
        flag: params.flag
      }
    })

    return result
  }

  async findByUser(params: FindByUserParams): Promise<Feature> {

     const result = await prisma.featureUser.findFirst({
      where: {
        userId: params.userId,
        feature: {
          flag: params.feature
        }
      },
      include: {
        feature: {
          select: {
            flag: true,
            value: true
          }
        }
      }
    })


    if (result) {
      return {
        flag: result.feature.flag,
        value: result.feature.value
      }
    }

    return null
  }

}