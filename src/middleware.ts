import { type NextRequest, NextResponse } from "next/server";
import { getCookies, updateSession } from "./lib/session";

export async function middleware(request: NextRequest) {
    // //comandos aleatórios para testar o middleware
    // if(request.nextUrl.pathname === "/test") {
    //     // return NextResponse.rewrite(new URL("/",request.url)) //Aqui eu consigo redirecionar o usuário para outra rota sem ter que modificar o URL
    //     return NextResponse.redirect(new URL("/",request.url))
    // }

    // //utilizando o next response
    // const response = NextResponse.next()
    
    // //pegando os dados do cookie
    // const themepreference = request.cookies.get("theme")//cookie de preferências //posso possuir vários cookies

    // if (!themepreference) {//se for vazio
    //     response.cookies.set("theme","dark")
    //     response.headers.set("custom-header","custom-value")//não sei para que serve este header
    // }
    
    // console.log('middleware ativado')

    // const cookies = await getCookies()
    // console.log(cookies)

    // //rota do usuário
    // const url = request.nextUrl.clone()          ////POR ENQUANTO ESSE SISTEMA NÃO ESTÁ
    // const rota = url.pathname



    // if(!cookies && rota !== '/login') {
    //     console.log('redirecionamento ativado')
    //     console.log(cookies)
    //     // return NextResponse.rewrite(new URL("/",request.url)) //Aqui eu consigo redirecionar o usuário para outra rota sem ter que modificar o URL
    //     return NextResponse.redirect(new URL("/login",request.url))
    // }

    //comando específico para atualizar a sessão
    return await updateSession(request)
}

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/",request.url)) //redireciona o usuário à página raiz
// }

// export const config = { //limita o middleware a funcionar apenas na rota test
//     matcher: "/test"
// }
