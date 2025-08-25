"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "./courses.module.scss";
import { useModal } from "@/components/Modale/ModalContext";

export const courses = [
  {
    title: "Laser Hair Removal",
    duration: "40 hours theory + practice on models",
    description:
      "A diode laser is the latest breakthrough technology in laser hair removal systems. It uses a light beam with a narrow focus to target specific areas in the skin. Diode lasers offer the deepest penetration levels giving the most effective results post treatment.",
    income: "from $18,000 and up per day",
    image: "/img/Products/Laser.webp",
  },
  {
    title: "Vacuum Therapy",
    duration: "3 days theory & practice",
    description:
      "With a vacuum butt lift, you can firm your behind without needles, incisions, or other invasive techniques. Vacuum therapy contours the body when diet and exercise haven’t worked.",
    income: "from $6,000 and up per day",
    image: "/img/Products/Vacum.webp",
  },
  {
    title: "Body Sculpting",
    duration: "3 days theory & practice",
    description:
      "This treatment induces supramaximal contractions which forces the muscle tissue to adapt and remodel its inner structure resulting in muscle building and a firmer, lifted, toned body.",
    income: "from $12,000 and up per day",
    image: "/img/Products/body.webp",
  },
  {
    title: "Carbon Peel",
    duration: "3 days theory & practice",
    description:
      "The laser treatment is suitable for all ages and can lighten age spots and dark spots, fade freckles, reduce wrinkles and fine lines, shrink pores, and remove blackheads and acne. It can also lift and tighten the skin, improve elasticity, moisturise and give a bright and radiant complexion.",
    income: "from $3,500 and up per day",
    image: "/img/Products/Carbone.webp",
  },
  {
    title: "Hair Extensions",
    duration: "3 days theory & practice on mannequin and on a real model",
    description:
      "This course covers hair extension types, how to distinguish human from synthetic hair, client consultations, care rules, installation and removal procedures, and cutting/blending. Includes practice on mannequins and real models.",
    income: "$7,500 per day",
    image: "/img/Products/Hair.webp",
  },
  {
    title: "Cavitation",
    duration: "3 days theory & practice",
    description:
      "Ultrasound Cavitation & Radio Frequency treatment to act on all localised fat deposits. Non-invasive and non-surgical fat removal treatment for fat emulsification and cellulite reduction.",
    income: "from $2,600 and up per day",
    image: "/img/Products/Cavatation.webp",
  },
];

export default function Courses() {
  return (
    <section className={styles.courses}>
      <div className={styles.container}>
        {courses.map((course, index) => (
          <CourseRow key={index} index={index} course={course} />
        ))}
      </div>
    </section>
  );
}

function CourseRow({ index, course }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const visible = inView ? styles.visible : "";
  const { setIsOpen } = useModal();

  const handleEnroll = () => {
    localStorage.setItem("courseTitle", course.title);
    setIsOpen(true);
  };

  return (
    <div ref={ref} className={`${styles.row} ${visible}`}>
      <div className={styles.empty}>
        {index === 0 && (
          <>
            <h2>OUR Courses</h2>
            <h3>
              The best of the best: top courses for future stars of the beauty industry
            </h3>
          </>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.col}>
          <h4>{course.title}</h4>

          <h5>Duration</h5>
          <p className={styles.descr}>{course.duration}</p>

          <h5>Description</h5>
          <p className={styles.descr}>{course.description}</p>

          <h5>Your income</h5>
          <p className={styles.descr}>{course.income}</p>
        </div>

        <div className={styles.col}>
          <div className={styles.img} style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "5 / 4" }}>
  <Image
    src={course.image}
    alt="Course illustration"
    fill
    style={{ objectFit: "cover", borderRadius: "12px" }}
  />
</div>

          <div
            className={styles.button}
            style={{ cursor: "pointer" }}
            onClick={handleEnroll}
          >
            <p>Enroll in a course</p>
          </div>
        </div>
      </div>
    </div>
  );
}