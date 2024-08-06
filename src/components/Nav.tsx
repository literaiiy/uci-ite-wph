'use client';

import { getPages } from "@/lib/api";
import "./Nav.scss";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";

const ANTEATER_SIZE: number = 80;
const MOBILE_CUTOFF: number = 720;

export default function Nav({ pages }: { pages: any }) {
  const isDesktop = typeof window !== "undefined" && window.innerWidth > MOBILE_CUTOFF

  // only show nav by default if on desktop
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    setShowNav(isDesktop);
  }, [isDesktop])

  return (
    <nav>
      <div className="logo-wrapper">
        <Link href="/" className="logo">
          <span className="uci">uci</span>
          <Image alt="UCI ITE logo" src="/anteater.svg" width={ANTEATER_SIZE} height={ANTEATER_SIZE * 0.66}/>
          <span className="ite">ite</span>
        </Link>
        <span className="sub">
          <span>The</span>
          <span className="em">Institute of Transportation Engineers</span>
          <span>at</span>
          <span className="em">UC Irvine</span>
        </span>
        <div
          className="menu-button"
          onClick={() => setShowNav(!showNav)}
          >
          <RxHamburgerMenu />
        </div>
        {/* <Link className="join-button" href="http://eepurl.com/io-lgk">Join</Link> */}
      </div>
      <div
        className="nav-items"
        style={{ display: showNav ? "flex" : "none" }}
      >
        <Link
          onClick={() => {if (!isDesktop) setShowNav(false)}}
          href="/"
        >Home
        </Link>
        {pages.map((page: any) => (
          <Link 
            onClick={() => {if (!isDesktop) setShowNav(false)}}
            key={page.slug}
            href={`/${page.slug}`}
            // className={page.slug === pn.split("/")[-1] ? "selected" : ""}
          >
            {page.title.rendered}
          </Link>
        ))}
      </div>
  </nav>
  )
}