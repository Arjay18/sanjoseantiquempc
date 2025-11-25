/*
  Warnings:

  - You are about to drop the column `thumbnail` on the `SuccessStory` table. All the data in the column will be lost.
  - You are about to drop the column `videoUrl` on the `SuccessStory` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SuccessStory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "memberName" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "videoFile" TEXT,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_SuccessStory" ("category", "createdAt", "description", "id", "memberName", "status", "title", "updatedAt") SELECT "category", "createdAt", "description", "id", "memberName", "status", "title", "updatedAt" FROM "SuccessStory";
DROP TABLE "SuccessStory";
ALTER TABLE "new_SuccessStory" RENAME TO "SuccessStory";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
