"use client";

import { useState } from "react";
import Link from "next/link";                      // ← роутинг через Next.js
import { useModal } from "@/components/Modale/ModalContext";

import styles from "./header.module.scss";
// import "@/app/global.css"; // импорт глобальных стилей
import Button  from "@/components/Button/Button";
import Layout  from "@/components/Layout/Layout";

export default function Header() {
  const { setIsOpen, isOpen } = useModal();
  const [isHeaderOpen, setHeaderOpen] = useState(false);

  /* ---------- helpers ---------- */
  const handleModal = () => {
    setIsOpen(!isOpen);
    setHeaderOpen(false);
  };

  /* ---------- render ---------- */
  return (
    <header className={isHeaderOpen ? styles.open : ""}>
      <Layout>
        <nav className={styles.container}>
          {/* ——— логотип: ведёт на главную “/” ——— */}
          <Link
            href="/"
            className={`${styles.header_item} ${styles.logo}`}
            onClick={() => setHeaderOpen(false)}       // закрываем бургер-меню
          >
            <p>Persona&nbsp;Beauty&nbsp;Academy.</p>
          </Link>

          {/* ——— навигация внутри страницы ——— */}
          <ul className={styles.header_item}>
            <li>
              <a href="#stages" onClick={() => setHeaderOpen(false)}>
                Learn, Earn, Stabilize
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setHeaderOpen(false)}>
                Student Experience
              </a>
            </li>
            <li>
              <a href="#classes" onClick={() => setHeaderOpen(false)}>
                Certified Classes
              </a>
            </li>
          </ul>

          {/* ——— правая колонка ——— */}
          {isHeaderOpen ? (
            <div className={styles.lower_block}>
              <Button />
              <div className={styles.meta_data}>
                <span>New Jersey</span>
                <span>2025</span>
              </div>
            </div>
          ) : (
            <div className={styles.header_item} onClick={handleModal}>
              <span>LET'S TALK</span>
            </div>
          )}

          {/* ——— бургер ——— */}
          <div
            className={styles.burger}
            onClick={() => setHeaderOpen(!isHeaderOpen)}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </nav>
      </Layout>
    </header>
  );
}
