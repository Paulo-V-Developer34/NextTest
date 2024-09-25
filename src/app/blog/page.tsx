import ChatInput from "@/components/ChatInput";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function Blogs() {
  // const posts = await prisma.post.findMany();
  // const user = await prisma.user.findUnique({//isso pode dar errado, mas é só tentar atualizar o prisma client via npx prisma db push enquanto o servidor Next está desligado
  //   where: {
  //     email: "paulo@gmail.com"
  //   },
  //   include: {
  //     posts: true //consigo acessar os posts através do usuário via FK 
  //   }
  // });
  const posts = await prisma.post.findMany();
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
        <ChatInput/>
      </div>
    );
  }
  