import { PrismaClient } from './database/generated/prisma-client-js'

const dbClient = new PrismaClient()

export {
  dbClient
}