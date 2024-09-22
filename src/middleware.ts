import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    if(request.nextUrl.pathname === "/test") {
        // return NextResponse.rewrite(new URL("/",request.url)) //Aqui eu consigo redirecionar o usuário para outra rota sem ter que modificar o URL
        return NextResponse.redirect(new URL("/",request.url))
    }

    //utilizando o next response
    const response = NextResponse.next()
    
    //pegando os dados do cookie
    const themepreference = request.cookies.get("theme")//cookie de preferências //posso possuir vários cookies

    if (!themepreference) {//se for vazio
        response.cookies.set("theme","dark")
    }
    
    response.headers.set("custom-header","custom-value")//não sei para que serve este header

    return response
}

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/",request.url)) //redireciona o usuário à página raiz
// }

// export const config = { //limita o middleware a funcionar apenas na rota test
//     matcher: "/test"
// }
