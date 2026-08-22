-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isRoleSelected" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "passwordHash" DROP NOT NULL;
