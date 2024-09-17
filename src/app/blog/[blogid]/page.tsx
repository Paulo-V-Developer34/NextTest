import prisma from "@/lib/db";

interface blogparams {
  params:{
    blogid:string
  }
}

export default async function Blog({params}:blogparams) {
    const post = await prisma.post.findUnique({
      where: {
        slug: params.blogid,//esse na verdade é o slug
      },
      select: {
        title: true,
        content: true,
        createdat: true,
        updateat: true
      }
    })
    return (
      <div className="m-3 p-1 bg-slate-400 rounded gap-1">
        <h1> {post?.title}</h1>
        <p>{post?.content}</p>
        <p>Data de publicação: {post?.createdat?.toLocaleDateString()}</p>
        <p>Data de alteração: {post?.updateat?.toLocaleDateString()}</p>
      </div>
    );
  }  