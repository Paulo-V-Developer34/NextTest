import type { Metadata } from "next";
import localFont from "next/font/local";

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
        2000
        )
    })
    console.log(title)
    return {
        title: `Product ${title}`,
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        <h1>Produtos :D</h1>
        {children}
    </>
  );
}
