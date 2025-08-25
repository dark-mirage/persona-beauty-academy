"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

import avatar from "@/assets/img/avatar.png";
import styles from "./footer.module.scss";

export default function Footer() {
  /* Появление футера при ~20 % видимости */
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const visible = inView ? styles.visible : "";

  return (
    <footer ref={ref} className={styles.footer}>
      <div className={`${styles.container} ${visible}`}>
        {/* ───────── бегущая строка ───────── */}
        <div className={styles.ticker}>
          <div className={styles.track}>
            <span>LET’S&nbsp;TALK.&nbsp;</span>
            <span>LET’S&nbsp;TALK.&nbsp;</span>
            <span>LET’S&nbsp;TALK.&nbsp;</span>
          </div>
        </div>

        {/* ───────── аватарка + цитата ───────── */}
        <div className={styles.footer_block}>
          <div className={styles.col}>
            <div className={`${styles.img} ${styles.float}`}>
              <Image src={avatar} alt="Tamila — founder" width={80} height={80} priority />
            </div>
          </div>

          <div className={styles.col}>
            <p className={styles.title}>Meet Tamila</p>
            <p className={styles.descr}>Founder of Persona Beauty Academy</p>
            <p className={styles.quote}>
              «My mission is to show as many girls as possible that you can do what you love — and earn decent money»
            </p>
          </div>
        </div>

        {/* ───────── навигация + контакты ───────── */}
        <div className={styles.footer_block}>
          <div className={styles.col}>
            <a href="#stages">Learn, Earn, Stabilize</a>
            <a href="#experience">Student Experience</a>
            <a href="#classes">Certified Classes</a>
          </div>

          <div className={styles.col}>
            {/* кликабельные телефон и e-mail */}
            <a href="tel:+19085550123">+1&nbsp;(908)&nbsp;555-0123</a>
            <a href="mailto:hello@persona-beauty.us">hello@persona-beauty.us</a>
          </div>
        </div>

        {/* ───────── копирайт и полезные ссылки ───────── */}
        <div className={styles.copyright}>
          <Link href="/" className={styles.copyright_item}>
            Persona&nbsp;Beauty&nbsp;Academy
          </Link>

          <Link href="/PrivacyPolicy" className={styles.copyright_item}>
            Privacy&nbsp;Policy
          </Link>

          <p className={styles.copyright_item}>New&nbsp;Jersey</p>
          <p className={styles.copyright_item}>©&nbsp;2025</p>
        </div>
      </div>
    </footer>
  );
}
