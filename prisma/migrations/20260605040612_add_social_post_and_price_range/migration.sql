-- CreateEnum
CREATE TYPE "SocialPlatformEnum" AS ENUM ('facebook', 'instagram', 'whatsapp');

-- CreateEnum
CREATE TYPE "ServiceTypeEnum" AS ENUM ('EXPRESS', 'LOW_COST', 'PUNTO_DE_RETIRO');

-- CreateTable
CREATE TABLE "SocialPost" (
    "id" SERIAL NOT NULL,
    "platform" "SocialPlatformEnum" NOT NULL,
    "userName" TEXT NOT NULL,
    "userAvatar" TEXT,
    "userUrl" TEXT,
    "content" TEXT NOT NULL,
    "postUrl" TEXT NOT NULL,
    "imageUrl" TEXT,
    "imageHint" TEXT,
    "likes" INTEGER,
    "comments" INTEGER,
    "shares" INTEGER,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SocialPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceRange" (
    "id" SERIAL NOT NULL,
    "serviceType" "ServiceTypeEnum" NOT NULL,
    "distanciaMinKm" DECIMAL(10,2) NOT NULL,
    "distanciaMaxKm" DECIMAL(10,2) NOT NULL,
    "precioRango" DECIMAL(10,2) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PriceRange_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SocialPost_postUrl_key" ON "SocialPost"("postUrl");

-- CreateIndex
CREATE UNIQUE INDEX "PriceRange_serviceType_distanciaMinKm_distanciaMaxKm_key" ON "PriceRange"("serviceType", "distanciaMinKm", "distanciaMaxKm");
