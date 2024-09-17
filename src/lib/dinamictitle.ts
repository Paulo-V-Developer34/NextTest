import { Metadata } from "next"

interface props {
    params: {
      productid:string
      reviewid:number
    }
}

export const generateMetadata2 = async ({params}:props): Promise<Metadata> => { //isso é um metadado dinâmico para título
    const title = await new Promise (resolve=>{
        setTimeout(()=>{
            resolve(`iphone ${params.productid}`)
        },
        1000
        )
    })
    console.log(title)
    return {
        title: `Product ${title}`,
    }
}