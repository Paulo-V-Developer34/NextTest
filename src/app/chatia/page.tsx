'use client'

import ChatIAInput from "@/components/ChatIAInput";
import prisma from "@/lib/db";
import Link from "next/link";
import { useEffect, useState } from "react";

export default async function Blogs() {
  const [chat,setchat] = useState<any>("")

    return (
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">Aqui você pode encontrar muitos blogs legais</h1>
        <h2 className="font-bold text-xl">Quatidade de posts ({posts.length})</h2>
        {
          posts?.map(el=>{
            return <section key={el.id} className="m-3 p-1 bg-slate-400 rounded w-2/4">
              <Link href={`/blog/${el.slug}`}><h1 className="font-bold">{el.title}</h1></Link>
              <p>{el.content}</p>
              <span>Criado por: {el.userId}</span>
            </section>
          })
        }
        <br/>
        <ChatIAInput/>{/*tenho que ver como posso pasar o setChat para cá */}
      </div>
    );
  }
  