'use client'

import Image from "next/image";
import styles from "./Header.module.css"
import Link from "next/link";
import HamburgerMenu from "./ham/hamb";
import { useState } from 'react';

export default function Header() {

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logolink}>
        <Image
          src="/Aetheriswhiteol.svg"  // publicディレクトリをルートとして扱う
          alt="Aetherislogo"
          width={350}
          height={150}
          priority
          className={styles.Aethlogo}
        />
        </Link>
        <div className={styles.hamburger}>
        <HamburgerMenu />
        </div>
      </header>
    </>
  );
}
