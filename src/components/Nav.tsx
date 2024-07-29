import { getPages } from "@/lib/api";
import "./Nav.scss";
import Image from "next/image";

const ANTEATER_SIZE: number = 80;

export default async function Nav() {
  const pages = await getPages();

  return (
    <nav>
      <a href="/" className="logo">
        <span className="uci">uci</span>
        <Image alt="UCI ITE logo" src="/anteater.svg" width={ANTEATER_SIZE} height={ANTEATER_SIZE * 0.66}/>
        <span className="ite">ite</span>
      </a>
      {/* <div className="sub">Institute of Transportation Engineers at the University of California, Irvine</div> */}
      <div className="nav-items">
        {pages.map((page: any) => (
          <a key={page.slug} href={`/${page.slug}`}>
            {page.title.rendered}
          </a>
        ))}
      </div>
  </nav>
  )
}