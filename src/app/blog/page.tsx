import ChatInput from "@/components/ChatInput";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function Blogs() {
  const posts = await prisma.post.findMany();
    return (
      <div>
        <h1>Aqui você pode encontrar muitos blogs legais</h1>
        <h2>Quatidade de posts ({posts.length})</h2>
        {
          posts.map(el=>{
            return <section key={el.id} className="m-3 p-1 bg-slate-400 rounded">
              <Link href={`/blog/${el.slug}`}><h1>{el.title}</h1></Link>
              <p>{el.content}</p>
            </section>
          })
        }
        <br/>
        <ChatInput/>
      </div>
    );
  }
  