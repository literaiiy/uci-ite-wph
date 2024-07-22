import { getPageBySlug, getPages } from "@/utils/api"

export default async function Page({ params }: { params: { page: string } }) {
  const page = await getPageBySlug(params.page);

  return (
    <main>
      <div>
        {params.page}
        {page.title.rendered}
      </div>
      {/* <div>{page.content}</div> */}
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered}} />
    </main>
  )
}

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((page: any) => ({ params: { page: page.slug } }));
}
