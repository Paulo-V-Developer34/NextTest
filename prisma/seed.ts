//aqui posso criar dados fictícios (semear o BD) para meu BD
//adicione um comando ao package.json
//execute o comando no git usando npx prisma db seed

import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const initialPosts: Prisma.PostCreateInput[] = [
    {
        title: 'Post 1',
        slug: 'post-1',
        content: 'Content of post 1',
        User: {
            connectOrCreate: {
                where: {
                    email: "paulo@gmail.com"
                },
                create: {
                    email: "paulo@gmail.com",
                    hashedpassword: "bobobo"
                }
            }
        }
    }
]

async function main() {
  console.log("Começando a semear dados...")
  for (const post of initialPosts) {
    const newPost = await prisma.post.create({
        data: post,
    })
    console.log(`Post com o ID ${newPost.id} foi inserido`)
  }
  console.log("Semeação concluída")
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