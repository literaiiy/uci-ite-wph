import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getPages } from "@/utils/api";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div className="title">UC IRVINE INSTITUTE OF TRANSPORTATION ENGINEERS</div>
          <div className="sub">site in construction</div>
          <div className="nav-items">
            {pages.map((page) => (
              <a key={page.slug} href={`/${page.slug}`}>
                {page.title.rendered}
              </a>
            ))}
          </div>
        </nav>
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}

// export async function generateStaticParams() {
//   const pages = await getPages();
//   return pages.map((page: any) => ({ params: { page: page.slug } }));
// }