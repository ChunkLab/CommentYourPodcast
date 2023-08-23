const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const { faker } = require('@faker-js/faker')

async function main() {
    for (let _ of new Array(100)) {
        const episodes = new Array(10).fill(1).map(() => ({
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
            duration: faker.number.int({ min: 900, max: 7200 }),
            img: faker.image.url(),
            createdAt: faker.date.past().getTime() / 1000,
        }))
        let podcast_data = {
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
            img: faker.image.url(),
            episodes: { create: episodes },
        }
        await prisma.podcast.create({ data: podcast_data })
    }
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
