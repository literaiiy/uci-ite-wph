'use client';

import "./Nav.scss";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { useEffect, useState } from "react";

const ANTEATER_SIZE: [number, number] = [963, 333];
const LOGO_SIZE_MULT: number = 0.2;
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
          {/* <span className="uci">uci</span> */}
          <Image
            alt="UCI ITE logo"
            src={"/itenewwhite.svg"}
            fill={true}
            // width={ANTEATER_SIZE[0] * LOGO_SIZE_MULT}
            // height={ANTEATER_SIZE[1] * LOGO_SIZE_MULT}
          />
          {/* <Image alt="UCI ITE logo" src="/anteater.svg" width={ANTEATER_SIZE} height={ANTEATER_SIZE * 0.66}/> */}
          {/* <span className="ite">ite</span> */}
        </Link>
        <span className="sub">
          The Institute of Transportation Engineers at UC Irvine
        </span>
        <div
          className="menu-button"
          onClick={() => setShowNav(!showNav)}
          >
          <MenuIcon />
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