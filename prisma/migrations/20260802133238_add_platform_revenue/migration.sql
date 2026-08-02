-- CreateEnum
CREATE TYPE "RevenueSource" AS ENUM ('CREATOR_FEE', 'CLIPPER_FEE');

-- AlterTable
ALTER TABLE "Campaign" ADD COLUMN     "platformFeeAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "totalCharged" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Clip" ADD COLUMN     "payoutAmount" DOUBLE PRECISION,
ADD COLUMN     "platformFeeAmount" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "PlatformRevenue" (
    "id" TEXT NOT NULL,
    "source" "RevenueSource" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "referenceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlatformRevenue_pkey" PRIMARY KEY ("id")
);
