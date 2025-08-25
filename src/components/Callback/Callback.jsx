"use client";
import { useInView } from "react-intersection-observer";
import Button from "@/components/Button/Button";
import styles from "./callback.module.scss";

export default function Callback() {
  /* станет true, когда ~30 % секции окажутся на экране */
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className={styles.callback}>
      <div className={`${styles.container} ${inView ? styles.visible : ""}`}>
        <h2 className={styles.heading}>Callback request</h2>
        <Button />
      </div>
    </section>
  );
}
