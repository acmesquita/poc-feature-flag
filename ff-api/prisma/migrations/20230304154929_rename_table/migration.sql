/*
  Warnings:

  - You are about to drop the `featureuser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "featureuser" DROP CONSTRAINT "featureuser_featureId_fkey";

-- DropForeignKey
ALTER TABLE "featureuser" DROP CONSTRAINT "featureuser_userId_fkey";

-- DropTable
DROP TABLE "featureuser";

-- CreateTable
CREATE TABLE "featureUser" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,
    "value" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "featureUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "featureUser" ADD CONSTRAINT "featureUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "featureUser" ADD CONSTRAINT "featureUser_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "features"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
