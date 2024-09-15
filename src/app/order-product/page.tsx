"use client"

import { useRouter } from "next/navigation"

export default function OrderProduct(){
    const route = useRouter()
    const review = ()=>{
        route.push('/products/15/review/2')//aqui ele adiciona um novo histórico de navegação
    }
    const about = ()=>{
        route.replace('order-product/about')//aqui ele refaz o histórico de navegação
    }
    return (
        <>
            <h1>Produtos em ordem</h1>
            <br/>
            <button onClick={route.back}>Voltar</button>
            <button onClick={route.forward}>Avançar</button>
            <button onClick={review}>Ver avaliação do produto</button>
            <button onClick={about}>Ver sobre este mecanismo</button>
        </>
    )
}