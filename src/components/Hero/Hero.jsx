import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Upanshu </h1>
        <p className={styles.description}>
          I'm a full-stack developer from Netaji Subhas University of Technology.Currently pursuing
          Computer Scinece With Specialization in Artificial Intelligence. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:dhankherupanshu@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};