'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import style from '../Header.module.css'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ハンバーガーボタン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={style.hamburger}
      >
        {isOpen ? <X size={40} /> : <Menu size={40} />}
      </button>

      {/* フルスクリーンメニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={style.fullscreenMenu}
          >
            <ul className={style.menuList}>
              <li>Home</li>
              <li>NEWS</li>
              <li>DISCOGRAPHY</li>
              <li>BIOGRAPHY</li>
              <li>GOODS</li>
              <li>FANCLUB</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
