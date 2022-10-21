// lib/prisma.ts
import { PrismaClient } from '@prisma/client';
import process from "eslint-config-next";

if (process.env.NODE_ENV === 'production') {
   const prisma = new PrismaClient();
}

export default prisma;
