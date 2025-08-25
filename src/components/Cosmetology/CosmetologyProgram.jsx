"use client";
import { useInView } from "react-intersection-observer";
import styles from "./CosmetologyProgram.module.scss";

const curriculumData = [
  {
    title: "Hair Care Fundamentals",
    topics: [
      "Cutting, styling, and chemical perming",
      "Coloring and bleaching techniques",
      "Shampooing and scalp massage",
      "Care for natural and synthetic hair"
    ],
  },
  {
    title: "Skin Care",
    topics: [
      "Basics of dermatology and skin anatomy",
      "Facial care, cleansing, masks, massage",
      "Equipment-based cosmetology (if licensed)",
      "Eyebrows, eyelashes, hair removal"
    ],
  },
  {
    title: "Nail Services",
    topics: [
      "Manicure and pedicure",
      "Cuticle care, hand and foot massage",
      "Gel polish, extensions, nail design",
      "Tool sanitation and sterilization"
    ],
  },
  {
    title: "Theory & Safety",
    topics: [
      "Hygiene and infection control",
      "State legislation, client and specialist rights",
      "Ethics and professional behavior",
      "Exam preparation"
    ],
  },
  {
    title: "Business & Client Service",
    topics: [
      "Client relationship management",
      "Personal brand building",
      "Salon business management",
      "Sales and service promotion"
    ],
  }
];

export default function CosmetologyProgram() {
  const { ref: centralRef, inView: centralInView } = useInView({
  threshold: 0.3,
  triggerOnce: true,
  });
  
  const allModules = curriculumData;

  return (
    <section className={styles.programSection}>
      <div 
       ref={centralRef}
         className={`${styles.centralText} ${centralInView ? styles.visible : ""}`}>
        <h1>Cosmetology Program – Pennsylvania (PA)</h1>
          <ul className={styles.centralTextList}>
            <li> Location: Persona Beauty Academy</li>
            <li> Program Title: Cosmetology Licensing Program</li>
            <li> Duration: 1,250 clock hours</li>
            <li> Format: Full-time / Part-time / Hybrid</li>
          </ul>
        <h2>Program Goal</h2>
        <p>Prepare students for successful completion of the Pennsylvania state licensing examination and professional work in salons, spas, or starting their own business.</p>
      </div>
      <div className={styles.timelineWrapper}>
        <h2 className={styles.timelineTitle}>Cosmetology Program Path</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineItems}>
            {allModules.map((module, i) => (
              <TimelineItem key={i} module={module} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.additionalSection}>
        <div className={styles.additionalFeatures}>
          <h2>Additional Features</h2>
          <ul>
            <li>Master classes by invited professionals</li>
            <li>Real client practice in the student salon</li>
            <li>Interview preparation and portfolio creation</li>
          </ul>
        </div>

        <div className={styles.admissionRequirements}>
          <h2>Admission Requirements</h2>
          <ul>
            <li>Minimum age: 16 years</li>
            <li>High school diploma or GED</li>
            <li>Application completion and interview</li>
          </ul>
        </div>
      </div>
      <div className={styles.finalCard}>
        <h2>Graduation & Certification</h2>
        <p>Complete the program and receive your Pennsylvania state license certificate.</p>
      </div>
    </section>
  );
}
function TimelineItem({ module, index }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div 
      ref={ref}
      className={`${styles.timelineItem} ${inView ? styles.visible : ''}`}
    >
      <div className={styles.timelineDot}></div>

      <div className={`${styles.timelineCard} ${index % 2 === 0 ? styles.left : styles.right}`}>
        <div className={styles.text}>
          <h3>{module.title}</h3>
          <ul>
            {module.topics.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}