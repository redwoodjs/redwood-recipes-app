-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cuisine" TEXT DEFAULT 'Tasty',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT,
    "blurb" TEXT
);
