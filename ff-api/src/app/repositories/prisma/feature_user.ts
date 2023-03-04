import { Feature } from "../../../core/models";
import { AddUserToFeatureParams, FeatureUserRepository, FindParams } from "../../../core/repositories";
import { prisma } from "../../database/prisma_client";

export class FeatureUserPrismaRepository implements FeatureUserRepository{


  async find(params: FindParams): Promise<Feature> {
    const result = await prisma.featureUser.findFirst({
      where: {
        feature: {
          flag: params.feature
        },
        AND: {
          userId: params.userId
        }
      },
      select: {
        feature: {
          select: {
            flag: true
          }
        },
        value: true
      }
    })

    if (result){
      return {
        flag: result.feature.flag,
        value: result.value
      }
    }

    return null
  }

  async addUserToFeature(params: AddUserToFeatureParams): Promise<boolean> {

    const featureUserFinded = await prisma.featureUser.findFirst({
      where: {
        feature: {
          flag: params.feature
        },
        AND: {
          userId: params.userId
        }
      }
    })

    if (!featureUserFinded) {
      const result = await prisma.featureUser.create({
        data: {
          feature: {
            connectOrCreate: {
              where: {
                flag: params.feature
              },
              create: {
                flag: params.feature
              }
            }
          },
          user: {
            connectOrCreate: {
              where: {
                id: params.userId
              },
              create: {
                id: params.userId
              }
            }
          }
        }
      })

      return Boolean(result)
    }

    return false
  }

  async destroy(params: FindParams): Promise<boolean> {
    try {
      const featureUserFinded = await prisma.featureUser.findFirst({
        where: {
          feature: {
            flag: params.feature
          },
          AND: {
            userId: params.userId
          }
        }
      })

      const result = await prisma.featureUser.delete({
        where: {
          id: featureUserFinded.id
        }
      })

      return true
    } catch (error) {
      return false
    }
  }
}