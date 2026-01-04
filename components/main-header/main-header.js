// "use client"; // we have to use client, because we are using a hook: usePathname
// but we want to add 'use client' as far down to the component tree as possible, so that majority of components stays server-components and renders quickly from serverside
// moved 'use client' to a separate modular component: nav-link.js

import Link from "next/link";
import Image from "next/image"; // new element provided by Next.js
import logoImg from "@/assets/logo.png";
// imported image will be a JS-object, where the path is stored under src-attribute, so we use {logoImg.src}
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

// import { usePathname } from "next/navigation"; // new hook, provided by Next.js
import NavLink from "./nav-link";

export default function MainHeader() {
  // const path = usePathname(); // the hook checks on which path the user is currently (by getting current full route-name in browser)

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          {/* <img src={logoImg.src} alt="A plate with food" /> */}
          <Image src={logoImg} alt="A plate with food" priority />
          {/* Next.js is optimizing pictures under the hood: <Image> has additional invisible attributes: 
        loading="lazy" - only when needed; automaticly given width & height; srcset - different sizes of img, depending on viewport,
        also picture will be served as .webp format - more efficient than .png format (although the original format was .png),
        We added the attribute 'priority' to make sure the picture is always loaded fast, which overwrites over lazy-loading. */}
          NextLevel Food
        </Link>
        {/* Navigation: */}
        <nav className={classes.nav}>
          <ul>
            <li>
              {/* if meals-link is already selected (if current page is Meals), then Meals-Navlink should have specially marked css class: */}
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
