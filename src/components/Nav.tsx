'use client';

import "./Nav.scss";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { useEffect, useState } from "react";

// TypeScript type for a page
interface Page {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  children?: Page[];  // Optional children property for nested pages
}

const ANTEATER_SIZE: [number, number] = [963, 333];
const LOGO_SIZE_MULT: number = 0.2;
const MOBILE_CUTOFF: number = 720;

export default function Nav({ pages }: { pages: Page[] }) {
  const [showNav, setShowNav] = useState(true);
  const [dropdowns, setDropdowns] = useState<Record<number, boolean>>({});  // Track which dropdowns are open

  const isDesktop = typeof window !== "undefined" && window.innerWidth > MOBILE_CUTOFF;

  useEffect(() => {
    setShowNav(isDesktop);
  }, [isDesktop]);

  const toggleDropdown = (pageId: number) => {
    setDropdowns(prev => ({ ...prev, [pageId]: !prev[pageId] }));
  };

  const renderMenu = (pages: Page[]): JSX.Element => {
    return (
      <ul>
        {pages.map(page => (
          <li key={page.id}>
            <Link 
              href={`/${page.slug}`}
              onClick={() => { if (!isDesktop) setShowNav(false); }}
            >
              {page.title.rendered}
            </Link>
            {page.children && page.children.length > 0 && (
              <>
                <div className={`dropdown-menu ${dropdowns[page.id] ? 'show' : ''}`}>
                  {renderMenu(page.children)}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav>
      <div className="logo-wrapper">
        <Link href="/" className="logo">
          <Image
            alt="UCI ITE logo"
            src={"/itenewwhite.svg"}
            fill={true}
          />
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
      </div>
      <div
        className="nav-items"
        style={{ display: showNav ? "flex" : "none" }}
      >
        {/* <Link
          onClick={() => { if (!isDesktop) setShowNav(false); }}
          href="/"
        >
          Home
        </Link> */}
        {renderMenu(pages)}
      </div>
    </nav>
  );
}
