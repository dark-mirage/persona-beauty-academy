"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import founderImg from "@/assets/img/founder.png";
import styles from "./founder.module.scss";

export default function Founder() {
  /* сработает, когда 25 % секции окажутся на экране */
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  /* добавляем класс .visible, когда inView === true */
  const isVisible = inView ? styles.visible : "";

  return (
    <section className={styles.founder} ref={ref}>
      <div className={styles.container}>
        {/* левый текст */}
        <div className={`${styles.left} ${isVisible}`}>
          <h2 className={styles.founder_title}>
            <span>Meet Tamila</span> THE FOUNDER OF PERSONA BEAUTY ACADEMY
          </h2>
          <p className={styles.quote}>
            «My mission is to show as many girls as possible that you can do
            what you love and earn decent money»
          </p>
        </div>

        {/* фото */}
        <div className={`${styles.img} ${isVisible}`}>
          <Image
            src={founderImg}
            alt="Tamila – founder of Persona Beauty Academy"
            placeholder="blur"
            quality={90}
            sizes="(max-width: 768px) 80vw,
                   (max-width: 1360px) 45vw,
                   500px"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* правый список */}
        <div className={`${styles.right} ${isVisible}`}>
          <div className={styles.right_wrapp}>
            <p className={styles.descr}>Over 20 years in the beauty industry:</p>
            <p className={styles.descr}>
              1999–2001 — esthetician at The Lia Schorr Institute, Manhattan NY
            </p>
            <p className={styles.descr}>
              2008–2010 — cosmetology at Empire Beauty Schools, Pittsburgh PA
            </p>
            <p className={styles.descr}>
              2019 — beauty imagemaker at American Women’s Coaching Academy, Miami FL
            </p>
            <p className={styles.descr}>
              Former team member at Philip Pelusi Salons — gained invaluable
              experience from top US stylist Philip Pelusi
            </p>
            <p className={styles.descr}>Founder of @personabeautyspa (PA) since 2012</p>
            <p className={styles.descr}>Trained over 100 students since 2020</p>
            <p className={styles.descr}>
              Her students earn $48 000 + per WEEK right from the start
            </p>
            <p className={styles.descr}>
              Every training includes an extensive block on marketing,
              earnings and sales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
