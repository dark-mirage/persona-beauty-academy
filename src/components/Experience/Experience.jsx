"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "./experience.module.scss";

// Массив студентов и их отзывов, аватары из папки public/img/ExperienceImage
const students = [
  {
    name: "Sofia Volkova",
    achievement: "Performed 50+ microblading sessions in 2 weeks",
    feedback:
      "Thanks to Tamila’s Microblading Masterclass, I gained confidence and technique to complete over 50 sessions in just two weeks. My clients love their perfectly shaped brows!",
    course: "Microblading Masterclass",
    avatar: "/img/ExperienceImage/1.png",
  },
  {
    name: "Irina Kuznetsova",
    achievement: "Increased client bookings by 40%",
    feedback:
      "The skincare module worked wonders! After applying Tamila's facial rejuvenation secrets, my salon bookings jumped by 40%. Clients are thrilled with their glowing skin.",
    course: "Advanced Skin Rejuvenation",
    avatar: "/img/ExperienceImage/2.png",
  },
  {
    name: "Lolita Shmakova",
    achievement: "Mastered professional evening make-up in 1 week",
    feedback:
      "The Make-up Artistry course was intense and comprehensive. Within one week, I perfected evening make-up techniques and now get hired for events every weekend!",
    course: "Professional Make-up Artistry",
    avatar: "/img/ExperienceImage/3.png",
  },
  {
    name: "Angelina Karnitskaya",
    achievement: "Doubled her monthly income",
    feedback:
      "After completing Tamila’s Permanent Makeup Training, I started attracting premium clients. Within a month, my income more than doubled!",
    course: "Hair Extensions",
    avatar: "/img/ExperienceImage/#.png",
  },
];

// Компонент строки с данными студента
function StudentRow({ data }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <div ref={ref} className={`${styles.row} ${inView ? styles.visible : ""}`}>
      <div className={styles.col}>
        <span>{data.name}</span>
        <div className={styles.img}>
          <Image
            src={data.avatar}
            alt={data.name}
            width={170}
            height={170}
          />
        </div>
      </div>
      <div className={styles.col}>{data.achievement}</div>
      <div className={`${styles.col} ${styles.descr}`}>{data.feedback}</div>
      <div className={styles.col}>{data.course}</div>
    </div>
  );
}

// Основной компонент Experience
export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>Student Experience</h2>
        <div className={styles.table}>
          {/* Заголовок таблицы */}
          <div className={styles.table_head}>
            <div className={styles.row}>
              <div className={styles.col}>NAME</div>
              <div className={styles.col}>What the student has achieved</div>
              <div className={`${styles.col} ${styles.descr}`}>What do our students say?</div>
              <div className={styles.col}>Course name</div>
            </div>
          </div>
          {/* Тело таблицы */}
          <div className={styles.table_body}>
            {students.map((s, idx) => (
              <StudentRow key={idx} data={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
