const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const { faker } = require('@faker-js/faker')

async function main() {
  await prisma.podcast.deleteMany()
  await prisma.episode.deleteMany()
  await prisma.comment.deleteMany()

  await prisma.podcast.createMany({
    data: new Array(40).fill(1).map(() => ({
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      img: faker.image.url(),
    })),
  })

  const podcasts = await prisma.podcast.findMany()

  await prisma.episode.createMany({
    data: new Array(200).fill(1).map(() => {
      const podcast = podcasts[faker.number.int({ max: podcasts.length - 1 })]
      return {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        duration: faker.number.int({ min: 900, max: 7200 }),
        img: Math.random() > 0.9 ? podcast.img : faker.image.url(),
        createdAt: faker.date.past().getTime() / 1000,
        podcastId: podcast.id,
      }
    }),
  })

  const episodes = await prisma.episode.findMany()
  await prisma.comment.createMany({
    data: new Array(1000).fill(1).map(() => {
      const episode = episodes[faker.number.int({ max: episodes.length - 1 })]
      return {
        author: faker.person.fullName(),
        content: faker.lorem.sentence(),
        createdAt: faker.date.past().getTime() / 1000,
        episodeId: episode.id,
      }
    }),
  })
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
