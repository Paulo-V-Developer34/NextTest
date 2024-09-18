"use server" //devemos utilizar isto para especificar que estamos utilizando um componente de servidor, mas isso é aplicável apenas para arquivos .ts

import prisma from "@/lib/db"
import { Prisma } from "@prisma/client"
// import { connect } from "http2"
import { revalidatePath } from "next/cache"


////////////////////////////////
export async function postar(formData:FormData) {
    try {
    await prisma.post.create({
        data: {
            title: formData.get("title") as string,
            slug: (formData.get("title") as string)
                    .replace(/\s+/g,"-")
                    .toLowerCase(),
            content: formData.get("content") as string,
            User: {
                connect: {
                    email: "paulo@gmail.com"
                }
            }
        }
    })
    revalidatePath('/blog')//esse código faz com que a página seja atualizada a cada post
} catch(error) {
    console.log("Um erro ocorreu!")
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
            console.log('There is a unique constraint validation, a new user cannot be created with this email')
        }
    }
}

}

export async function editpost(formData:FormData, id:string) {
    await prisma.post.update({
        where: { id },
        data: {
            title: formData.get("title") as string,
            slug: (formData.get("title") as string)
                    .replace(/\s+/g,"-")
                    .toLowerCase(),
            content: formData.get("content") as string
        }
    })
    revalidatePath('/blog')
}

export async function deletarpost(id:string) {
    await prisma.post.delete({
        where: { id }
    })
    revalidatePath('/blog')
}

