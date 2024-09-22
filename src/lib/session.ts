"use server"

import { SignJWT } from "jose"
import { cookies } from "next/headers"

// import { publicEncrypt } from "crypto" //penso em utiliza-lo em versões futuras

interface login {
    nome:string,
    senha:string
}

//variáveis
const chavesecreta = 'caisdhfiq'
const key = new TextEncoder().encode(chavesecreta)

//criptografia
export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('10 sec from now')
        .sign(key)
}

//fazer login
export async function login(conta:login) {
    const user = {
        nome: conta.nome,
        senha: conta.senha,
        tipo: "ADM"
    }
    
    const expires = new Date(Date.now() + 10 * 1000)
    console.log(expires)
    const session = await encrypt({user,expires})

    cookies().set('session',session, {expires, httpOnly: true})
}