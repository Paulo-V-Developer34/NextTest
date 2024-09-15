import { Metadata } from "next"

// import { notFound } from "next/navigation"; esse código não funcionará visto que esse arquivo simplesmente não existe na pasta next ;_;
interface props {
  params: {
    productid:string
    reviewid:number
  }
}

export const generateMetadata = async ({params}:props): Promise<Metadata> => { //isso é um metadado dinâmico para título
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

export default function Review({params}:props) {
    // if(params.reviewid > 1000) {
    //     notFound()
    //     return null
    // }
        
    return (
      <div>
        <h1>Review {params.reviewid} do produto {params.productid}</h1>
      </div>
    );
  }  