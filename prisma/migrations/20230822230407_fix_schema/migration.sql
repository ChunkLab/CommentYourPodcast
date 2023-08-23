/*
  Warnings:

  - You are about to drop the column `episodeId` on the `Podcast` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Podcast" DROP CONSTRAINT "Podcast_episodeId_fkey";

-- AlterTable
ALTER TABLE "Episode" ADD COLUMN     "podcastId" INTEGER;

-- AlterTable
ALTER TABLE "Podcast" DROP COLUMN "episodeId";

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_podcastId_fkey" FOREIGN KEY ("podcastId") REFERENCES "Podcast"("id") ON DELETE SET NULL ON UPDATE CASCADE;
