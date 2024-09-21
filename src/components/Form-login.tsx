'use client'

import toast, { Toaster } from "react-hot-toast"
import { z } from "zod"

const contatype = z.object({
    nome: z.string().min(10,{message:"Seu nome deve ter no mínimo 10 dígitos"}).max(60,{message:"Seu nome deve ter no máximo 60 dígitos"}),
    senha: z.string().min(8,{message:"sua senha deve ter no mínimo 8 dígitos"})
})

export default function FormLogin() {


    const enviarform = async (formData:FormData)=>{
        const conta = {
            nome: formData.get("nome"),
            senha: formData.get("senha")
        }

        const result = contatype.safeParse(conta)//posso utilizar apenas parse, entretanto a forma com a qual ele lidará com os erros será diferente

        if(!result.success) {
            // console.log(result.error.issues) //essa é uma das formas de registrarmos o erro

            let errormessage = ""

            result.error.issues.forEach((issue)=>{
                errormessage = errormessage + issue.path[0] + ": " + issue.message + ". "
            })

            toast.error(errormessage)
            return
        }

        //ainda preciso chamar a função da lib
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
    </form>
    )
    
}