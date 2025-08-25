// Preview.jsx
"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

import Button from "@/components/Button/Button";
import previewImage from "@/assets/img/preview-1.png";
import previewImageMobile from "@/assets/img/MobileHeader.webp";
import styles from "./preview.module.scss";

export default function Preview() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imgSrc = isMobile ? previewImageMobile : previewImage;
  const imgSize = isMobile ? { width: 1200, height: 1200 } : { width: 900, height: 900 };

  return (
    <section className={styles.preview}>
      <div className={styles.container}>
        <div className={styles.img_block}>
          <Parallax translateY={["0px", "140px"]} easing="easeOutQuad">
            <Image
              src={imgSrc}
              alt="Preview"
              {...imgSize}
              className={styles.img}
              priority
            />
          </Parallax>
        </div>

        <div className={styles.text_block}>
          <div className={styles.upper_block}>
            <a href="#stages">
              <div className={styles.title}>
                <span>01</span>
                <p>Learn, Earn, Stabilize</p>
              </div>
            </a>
            <a href="#experience">
              <div className={styles.title}>
                <span>02</span>
                <p>Student experience</p>
              </div>
            </a>
            <a href="#classes">
              <div className={styles.title}>
                <span>03</span>
                <p>Certified Classes</p>
              </div>
            </a>
          </div>

          <div className={styles.lower_block}>
            <Button isMobile={isMobile} />
            <div className={styles.meta_data}>
              <span>New Jersey</span>
              <span>2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
