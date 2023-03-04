/*
  Warnings:

  - You are about to drop the `Feature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FeatureUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FeatureUser" DROP CONSTRAINT "FeatureUser_featureId_fkey";

-- DropForeignKey
ALTER TABLE "FeatureUser" DROP CONSTRAINT "FeatureUser_userId_fkey";

-- DropTable
DROP TABLE "Feature";

-- DropTable
DROP TABLE "FeatureUser";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "features" (
    "id" TEXT NOT NULL,
    "flag" TEXT NOT NULL,

    CONSTRAINT "features_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "featureUser" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,
    "value" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "featureUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "features_flag_key" ON "features"("flag");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- AddForeignKey
ALTER TABLE "featureUser" ADD CONSTRAINT "featureUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "featureUser" ADD CONSTRAINT "featureUser_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "features"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
