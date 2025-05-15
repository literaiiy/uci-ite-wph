import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.scss";
import { getPages } from "@/lib/api";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import CookieConsent from "react-cookie-consent";

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

// const Banner = (
//   <CookieConsent
//     location="bottom"
//     buttonText="Sure man!!"
//     cookieName="myAwesomeCookieName2"
//     style={{ background: "#2B373B" }}
//     buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
//     expires={150}
//   >
//     This website uses cookies to enhance the user experience.{" "}
//     <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
// </CookieConsent>
// )

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={defaultFont.className}>
        {/* {Banner} */}
        {/* @ts-ignore */}
        <Nav pages={pages} />
        {children}
        <Footer />
        {/* <Toast 
          message="Subscribe to our newsletter!"
          href="http://eepurl.com/io-lgk"
        /> */}
      </body>
      <GoogleAnalytics gaId="G-0LGBNNP5P1"/>
    </html>
  );
}

// export async function generateStaticParams() {
//   const pages = await getPages();
//   return pages.map((page: any) => ({ params: { page: page.slug } }));
// }