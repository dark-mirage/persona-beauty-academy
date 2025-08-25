"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "./stages.module.scss";

// Пути к трём фотографиям из public/img/TopProducts
const stageImages = [
  "/img/TopProducts/1.png",
  "/img/TopProducts/2.png",
  "/img/TopProducts/3.png",
];

// Данные для трёх блоков
const titles = ["Learn", "Earn", "Stabilize"];
const first = [
  "You will learn theory and practice in a profession that inspires you",
  "You will learn marketing strategies to earn $48,000 and UP per WEEK right from the start",
  "Stress-free — you can stay with the Persona Beauty Spa team until you feel comfortable enough to work on your own. No rent, no instruments — the studio provides everything",
];
const second = [
  "You have received modern knowledge and necessary practice",
  "Now you know how to earn decent money and have drawn up a strategy to steadily increase your earnings.",
  "You move into independent work with a client base, experience, business plan and support from teachers",
];

export default function Stages() {
  return (
    <section id="stages" className={styles.stages}>
      <div className={styles.container}>
        {titles.map((title, i) => (
          <StageCard
            key={i}
            number={i + 1}
            title={title}
            text1={first[i]}
            text2={second[i]}
            imgSrc={stageImages[i]}
          />
        ))}
      </div>
    </section>
  );
}

// Отдельная карточка этапа
function StageCard({ number, title, text1, text2, imgSrc }) {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <div ref={ref} className={`${styles.stage} ${inView ? styles.visible : ""}`}>
      <div className={styles.img}>
        <Image
          src={imgSrc}
          alt={`Stage ${number}`}
          width={500}
          height={300}
          style={{ objectFit: "cover", width: "100%", height: "auto", borderRadius: "12px" }}
        />
      </div>

      <h5>{`0${number}`}</h5>
      <h2>{title}</h2>

      <p className={styles.descr}>{text1}</p>

      <h3>Results</h3>

      <p className={styles.descr}>{text2}</p>
    </div>
  );
}
