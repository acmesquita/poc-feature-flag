/*
  Warnings:

  - You are about to drop the `featureUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `features` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "featureUser" DROP CONSTRAINT "featureUser_featureId_fkey";

-- DropForeignKey
ALTER TABLE "featureUser" DROP CONSTRAINT "featureUser_userId_fkey";

-- DropTable
DROP TABLE "featureUser";

-- DropTable
DROP TABLE "features";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "flag" TEXT NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureUser" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,
    "value" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "FeatureUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Feature_flag_key" ON "Feature"("flag");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "FeatureUser" ADD CONSTRAINT "FeatureUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeatureUser" ADD CONSTRAINT "FeatureUser_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
