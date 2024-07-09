/*
  Warnings:

  - Added the required column `auth_type` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AuthType" AS ENUM ('Google', 'Github');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "auth_type" "AuthType" NOT NULL;
