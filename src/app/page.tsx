import Image from "next/image";
import styles from "./page.module.css";
import "./wp.scss"
import { getPageBySlug } from "@/lib/api";

export default async function Home() {
  const page = await getPageBySlug("frontpage");

  return (
  <main>
    <div>
      <h1>{page[0].title.rendered}</h1>
    </div>
    <div dangerouslySetInnerHTML={{ __html: page[0].content.rendered}} />
  </main>
  );
}

