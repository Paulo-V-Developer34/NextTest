'use client'

import { login } from "@/lib/session"
import toast, { Toaster } from "react-hot-toast"
import { z } from "zod"

interface login {
    nome:string,
    senha:string
}

const contatype = z.object({
    nome: z.string().min(10,{message:"Seu nome deve ter no mínimo 10 dígitos"}).max(60,{message:"Seu nome deve ter no máximo 60 dígitos"}),
    senha: z.string().min(8,{message:"sua senha deve ter no mínimo 8 dígitos"})
})

export default function FormLogin() {


    const enviarform = async (formData:FormData)=>{
        const nome = formData.get("nome") as string
        const senha = formData.get("senha") as string

        const conta:login = {
            nome: nome !== null ? nome : "",
            senha: senha !== null ? senha : ""
        }

        const result = contatype.safeParse(conta)//posso utilizar apenas parse, entretanto a forma com a qual ele lidará com os erros será diferente

        if(!result.success) {
            // console.log(result.error.issues) //essa é uma das formas de registrarmos o erro

            let errormessage = ""

            result.error.issues.forEach((issue)=>{
                errormessage = errormessage + issue.path[0] + ": " + issue.message + ". "
            })

            toast.error(errormessage)
            return null
        }

        //caso a operação não dê erro ele irá ver se os dados estão corretos e criará a sessão
        login(conta)
    }

    return (
        <form action={enviarform}>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={'nome'}>
            Nome
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={(Math.random()*999999).toString()}
            type='text'
            name='nome'
            placeholder="Digite aqui"/>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={'senha'}>
            Senha
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={(Math.random()*999999).toString()}
            type='text'
            name='senha'
            placeholder="Digite aqui"/>
        <button type="submit">Enviar</button>
    </form>
    )
    
}