'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

//lista de Links
const links = [
    {href:'/',name:'HOME'},
    {href:'/products',name:'Produtos'},
    {href:'/blog',name:'Blogs'},
    {href:'/login',name:'Login'}
  ]

export default function BarraNav(){
    const pathname = usePathname()
    return (
        <nav className="flex justify-between gap-4">
            {
              links.map((el,i)=>{
                const isActive = pathname.startsWith(el.href)
                return <Link 
                  href={el.href} 
                  key={el.name}
                  className={isActive ? "font-bold mr-4":"text-blue-800 mr-4"}>{el.name}</Link>
              })
            }
        </nav>
    )
}