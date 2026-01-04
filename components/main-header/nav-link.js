"use client";   // smaller Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // new hook, provided by Next.js
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname(); // the hook checks on which path the user is currently (by getting current full route-name in browser)

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
