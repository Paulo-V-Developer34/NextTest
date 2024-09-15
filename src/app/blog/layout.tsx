import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Marechal Web Fake - Blogs",
//     description: "Blog da escola",
//   };
export const metadata: Metadata = {
    title: "Blogs",
    description: "Blog da escola",
  };

export default function BlogLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <section className="bg-green-500">
            <h1>SUPER BLOGS</h1>
        </section>
        {children}
      </>
    );
  }