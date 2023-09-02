-- CreateTable
CREATE TABLE "Telegram" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT,
    "fileUrl" TEXT,
    "buttonText" TEXT,
    "buttonLink" TEXT,
    "type" TEXT
);
