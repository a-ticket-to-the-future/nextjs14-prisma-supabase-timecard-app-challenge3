-- DropForeignKey
ALTER TABLE "Timecard" DROP CONSTRAINT "Timecard_userId_fkey";

-- AlterTable
ALTER TABLE "Timecard" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Timecard" ADD CONSTRAINT "Timecard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
