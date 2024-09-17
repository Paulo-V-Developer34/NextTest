"use client"
import { generateMetadata } from "@/lib/dinamictitle"

// import { notFound } from "next/navigation"; esse código não funcionará visto que esse arquivo simplesmente não existe na pasta next ;_;
interface props {
  params: {
    productid:string
    reviewid:number
  }
}

export default function Review({params}:props) {
    // if(params.reviewid > 1000) {
    //     notFound()
    //     return null
    // }
    generateMetadata({params:{productid:params.productid,reviewid:params.reviewid}})    
    return (
      <div>
        <h1>Review {params.reviewid} do produto {params.productid}</h1>
      </div>
    );
  }  