"use client";
import Image from "next/image";
import { useModal } from "@/components/Modale/ModalContext";
import styles from "./button.module.scss";

export default function Button({ type = "talk", fontSize = 40 }) {
  const { setIsOpen } = useModal();

  function handleOpen() {
    setIsOpen(true);
  }

  return (
    <div
      className={styles.block_button}
      onClick={type === "talk" ? handleOpen : undefined}
    >
      <div
        className={styles.button_text}
        style={type === "courses" ? { fontSize } : {}}
      >
        {type === "talk" ? "LET`S TALK!" : "ALL COURSES"}
      </div>
      <div className={styles.button}>
        <Image
          src="/img/button.png" // путь из папки public
          alt="Arrow"
          width={28}
          height={28}
          className={styles.arrow}
        />
      </div>
    </div>
  );
}
