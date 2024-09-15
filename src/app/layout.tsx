import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BarraNav from "./BarraNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    // absolute:"título que nunca vai mudar"
    default:"Marechal web teste",//é o padrão para caso não haja titulo
    template:"Marechal Web | %s"//o %s significa que eu vou adicionar um prefixo ou um sufixo antes ou depois
  },
  description: "Teste do site da escola Marechal do Ar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-blue-500 ">
          <h1>Aqui temos um cabeçalho</h1>
          <BarraNav/>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-red-300">
          aqui temos o footer
        </footer>
      </body>
    </html>
  );
}
