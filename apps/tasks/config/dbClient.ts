import { PrismaClient } from './database/generated/prisma-client-js'

export const dbClient = new PrismaClient()