import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.scss";
import { getPages } from "@/lib/api";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";

const defaultFont = Noto_Sans({ subsets: ["latin"] });
const DESC = "The University of California, Irvine student chapter of the Institute of Transportation Engineers.";
const COVER_IMG = "https://sites.uci.edu/irvineite/files/2024/06/Copy-of-DSC_0290-2.jpg";

export const metadata: Metadata = {
  title: { template: "%s | ITE at UC Irvine", default: "ITE at UC Irvine" },
  description: DESC,
  openGraph: {
    title: { template: "%s | ITE at UC Irvine", default: "ITE at UC Irvine" },
    description: DESC,
    url: "https://iteuci.org",
    type: "website",
    locale: "en_US",
    // site_name: "ITE at UC Irvine",
    images: [
      {
        url: COVER_IMG,
        width: 1920,
        height: 1280,
        alt: "ITE at UC Irvine"
      }
    ]
  },

}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <Nav pages={pages} />
        {children}
        <Footer />
        <Toast 
          message="Subscribe to our newsletter!"
          href="http://eepurl.com/io-lgk"
        />
      </body>
    </html>
  );
}

// export async function generateStaticParams() {
//   const pages = await getPages();
//   return pages.map((page: any) => ({ params: { page: page.slug } }));
// }