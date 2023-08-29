const { PrismaClient } = require('@prisma/client')
require('dotenv').config()
const prisma = new PrismaClient()

const { faker } = require('@faker-js/faker')

async function main() {
  await prisma.podcast.deleteMany()
  await prisma.episode.deleteMany()
  await prisma.comment.deleteMany()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
