import Link from "next/link";
import Image from "next/image"; // new element provided by Next.js
import logoImg from "@/assets/logo.png";
// imported image will be a JS-object, where the path is stored under src-attribute, so we use {logoImg.src}
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
    <MainHeaderBackground/>
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
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
