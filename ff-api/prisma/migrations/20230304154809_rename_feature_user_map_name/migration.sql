/*
  Warnings:

  - You are about to drop the `featureUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "featureUser" DROP CONSTRAINT "featureUser_featureId_fkey";

-- DropForeignKey
ALTER TABLE "featureUser" DROP CONSTRAINT "featureUser_userId_fkey";

-- DropTable
DROP TABLE "featureUser";

-- CreateTable
CREATE TABLE "featureuser" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,
    "value" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "featureuser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "featureuser" ADD CONSTRAINT "featureuser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "featureuser" ADD CONSTRAINT "featureuser_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "features"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
