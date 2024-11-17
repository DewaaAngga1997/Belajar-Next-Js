"use client";

import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path = usePathname();
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="logo" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={path.startsWith("/meals") ? classes.active : ""}
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={path.startsWith("/community") ? classes.active : ""}
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
