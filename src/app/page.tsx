import Carousel from "@/components/Carousel";
import "./wp.scss"
import { getPageBySlug, getSpecificMedia } from "@/lib/api";

export default async function Home() {
  const page: object[] = await getPageBySlug("frontpage");
  // @ts-ignore
  let pageHtml: string = page[0].content.rendered;
  const carouselMedia: [string, string, string][] = await getSpecificMedia("[include in carousel]");

  return (
    <>
    <Carousel
      media={carouselMedia}
    />
    <main>
      <div dangerouslySetInnerHTML={{ __html: pageHtml}} />
    </main>
  </>
  );
}

