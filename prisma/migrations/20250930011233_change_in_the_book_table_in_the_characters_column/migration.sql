-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "year_publication" INTEGER NOT NULL,
    "summary" TEXT NOT NULL,
    "historical_period" TEXT NOT NULL,
    "curiosities" TEXT NOT NULL,
    "characters" TEXT,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_books" ("authorId", "characters", "curiosities", "historical_period", "id", "imageUrl", "summary", "title", "year_publication") SELECT "authorId", "characters", "curiosities", "historical_period", "id", "imageUrl", "summary", "title", "year_publication" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
CREATE UNIQUE INDEX "books_title_key" ON "books"("title");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
