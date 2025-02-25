'use client'

import Image from "next/image";
import styles from "./Header.module.css"
import Link from "next/link";
import { useState } from 'react';

export default function Header() {

  return (
    <>
      <header className={styles.header}>
        <Image
          src="/Aetheriswhiteol.svg"  // publicディレクトリをルートとして扱う
          alt="Aetherislogo"
          width={350}
          height={250}
          priority
          className={styles.Aethlogo}
        />
        {/* ハンバーガーメニューはfremeranimetionで作成 */}
      </header>
    </>
  );
}
