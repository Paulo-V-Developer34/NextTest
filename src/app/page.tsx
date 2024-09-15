import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <br/>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Produtos</Link>
    </div>
  );
}
