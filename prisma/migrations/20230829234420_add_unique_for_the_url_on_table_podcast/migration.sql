/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Podcast` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Podcast_url_key" ON "Podcast"("url");
