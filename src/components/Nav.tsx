'use client';

import "./Nav.scss";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { FaHouseChimney } from "react-icons/fa6";
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
          <li
            key={page.id}
            className={page.children && page.children.length > 0 ? "has-children" : ""}
            // onMouseEnter={() => {toggleDropdown(page.id)}}
            // onMouseLeave={() => {toggleDropdown(page.id)}}
          >
            <Link
              href={page.slug}
            >
              {page.title.rendered}
              {page.children && page.children.length > 0 && (
                (
                  <div
                    className="dropdown-arrow"
                    onClick={(e) => {
                      console.log("BALLS")
                      e.preventDefault();
                      toggleDropdown(page.id)
                    }}
                  >▼</div>
                )
              )}
            </Link>
            {page.children && page.children.length > 0 && (
              <>
                <div
                  className="dropdown"
                  style={{ display: dropdowns[page.id] ? "block" : "none" }}
                />
                <div className="dropdown-content">
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
          href="/"
          className="home-icon"
        >
          <FaHouseChimney />
        </Link> */}
        {renderMenu([
          // add home to replace "frontpage"
          { id: 0, slug: "/", title: { rendered: "Home" } },
          ...pages
        ])}
      </div>
    </nav>
  );
}
