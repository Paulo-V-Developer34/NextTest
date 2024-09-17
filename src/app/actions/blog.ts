"use server" //devemos utilizar isto para especificar que estamos utilizando um componente de servidor, mas isso é aplicável apenas para arquivos .ts

import prisma from "@/lib/db"

export async function postar(formData:FormData) {
    await prisma.post.create({
        data: {
            title: formData.get("title") as string,
            slug: (formData.get("title") as string)
                    .replace(/\s+/g,"-")
                    .toLowerCase(),
            content: formData.get("content") as string,
        }
    })
}

