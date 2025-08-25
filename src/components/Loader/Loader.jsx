"use client";

import styles from "./loader.module.scss";

export default function Loader({ loading }) {
  return (
    <div className={`${styles.loader} ${loading ? styles.visible : styles.hidden}`}>
      {/* shimmer-слой */}
      <div className={styles.shimmer} />

      {/* кольцо-аура + подпись */}
      <div className={styles.ring}>
        <span className={styles.label}>loading</span>
      </div>
    </div>
  );
}
