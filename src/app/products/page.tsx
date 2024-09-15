import Link from "next/link";

export default function Products() {
    return (
      <div>
        <h1>aqui você pode encontrar vários produtos</h1>
        <br/>
        <ul>
          <li>
            <Link href={'7/review/3'}>Iphone 7 review (esse link não funciona)</Link>
            <Link href={'/products/2/review/5'}>Iphone 2 review</Link>
            <Link href={'/order-product'}>ir para order-product</Link>
          </li>
        </ul>
      </div>
    );
  }  