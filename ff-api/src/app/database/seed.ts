import { FindFeatureForUser } from "../../core/usecases/feature_user/find_feature_for_user"
import { FeaturePrismaRepository } from "../repositories/prisma/feature"
import { prisma } from "./prisma_client"

async function main() {

  const useCase = new FindFeatureForUser(new FeaturePrismaRepository())

  const result = await useCase.perform({
    feature: 'show_modal_2',
    userId: '99e5f704-b254-4556-ae9f-cd0c9ed073aa'
  })

  // const result = await prisma.feature.findUnique({
  //   where: {
  //     flag: 'show_modal_2',
  //   },
  //   include: {
  //     users: {
  //       where: {
  //         userId: '99e5f704-b254-4556-ae9f-cd0c9ed073aa'
  //       }
  //     }
  //   }
  // })

  console.log(result)
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async () => await prisma.$disconnect())

// 99e5f704-b254-4556-ae9f-cd0c9ed073aa