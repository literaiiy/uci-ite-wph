import { getPageBySlug } from "@/lib/api"
import Head from "next/head";
import "../wp.scss"
// import "../gallery.scss" // for gallery page only
import { Metadata } from "next";

export default async function Page({ params }: { params: { page: string } }) {
  const page = await getPageBySlug(params.page);
  
  return (
    <>
      <Head>
        <title>{page[0].title.rendered} | ITE at UC Irvine</title>
      </Head>
      <main>
        <div>
          <h1>{page[0].title.rendered}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: page[0].content.rendered}} />
      </main>
    </>
  )
}

// export async function generateMetadata({ params }: {params: {page: string}}): Promise<Metadata> {
//   const page = await getPageBySlug(params.page);

//   return {
//     title: page[0].title.rendered,
//   }
// }