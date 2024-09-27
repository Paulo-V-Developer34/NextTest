"use server"

import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"
import prisma from "./db"

// import { publicEncrypt } from "crypto" //penso em utiliza-lo em versões futuras

interface login {
    nome:string,
    senha:string
}

//variáveis
const chavesecreta = 'caisdhfiq'
const key = new TextEncoder().encode(chavesecreta)

//criptografia
//criptografar
export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('5m')
        .sign(key)
}
//descriptografar
export async function decript(input:string):Promise<any> {
    const {payload} = await jwtVerify(input, key, {//não sei o por que da desestruturação do payload
        algorithms: ['HS256']
    })
    console.log(payload)
    return payload
}

//fazer login
export async function login(conta:login) {
    const userdb = await prisma.user.findUnique({
        where: {
            email: conta.nome//isso representa um email
        }
    })

    const user = {
        gmail: conta.nome,
        senha: conta.senha,
        id: userdb?.id,
        tipo: "ADM"
    }
    
    const expires = new Date(Date.now() + 5 * 60 * 1000)
    console.log(expires)
    const session = await encrypt({user,expires})

    cookies().set('session',session, {expires, httpOnly: true})
}

//pegar o cookie
export async function getCookies(){
    const session = cookies().get('session')?.value
    if(!session) return null
    return await decript(session)//não gostei de estar trabalhando com um valor que pode ser possívelmente nulo em typescript que é uma linguagem fortemente tipada
}

//fazer a renovação da sessão
export async function updateSession(request:NextRequest){
    const session = request.cookies.get('session')?.value

    if(!session) return

    //renovar sessão //AVISO, nunca esqueça de realizar o "await"
    const parsed = await decript(session)//seção descriptografada
    parsed.expires = new Date(Date.now() + 5 * 60 * 1000) //acrescentando mais 10 segundos
    const res = NextResponse.next()//não sei exatamente para que serve nem como utilizar!!!!! //mas sei que isso avisa ao Next que iremos preparar uma "resposta" da web para o cliente (ou simplismente uma resposta)
    res.cookies.set('session',await encrypt(parsed),{httpOnly: true, expires: parsed.expires})

    return res
}