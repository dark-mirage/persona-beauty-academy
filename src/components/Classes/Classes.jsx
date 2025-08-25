"use client";
import { useInView } from "react-intersection-observer";
import styles from "./classes.module.scss";

export default function Classes() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="classes" className={styles.section} ref={ref}>
      <div className={`${styles.container} ${inView ? styles.visible : ""}`}>
        <h2 className={styles.heading}>Certified Classes</h2>

        <p className={styles.descr}>
          Our instructor Tamila offers educational classes and opportunities to
          be a part of Persona's team
        </p>

        <div className={styles.card}>
          <h3 className={styles.subheading}>Classes are in depth including:</h3>

          <p className={`${styles.descr} ${styles.final}`}>
            — Selling packages / marketing —
            <br />
            — Theory & take home workbooks —
            <br />
            — Allows students to bring in models to practice on until fully confident —
          </p>
        </div>
      </div>
    </section>
  );
}