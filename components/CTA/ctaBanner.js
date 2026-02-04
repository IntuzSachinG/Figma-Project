import Image from "next/image";
import styles from "./ctaBanner.module.css";
import Link from "next/link";

export default function AppointmentBanner() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.bannerContainer}>
        <div className={styles.content}>
          <p className={styles.subTitle}>Book Dental Appointment</p>
          <h1 className={styles.mainTitle}>
            Get <span className={styles.highlight}>10%-Off</span> Your <br />{" "}
            First Visit
          </h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
           <Link href="#" className={styles.button}>
            BOOK NOW <span className={styles.icon}><Image src="/Right.svg" alt="icon" width={14} height={15} /></span>
          </Link>
          
        </div>
       

        <div className={styles.imageWrapper}>
          <Image
            src="/Item 03.svg"
            alt="Dental Professional"
            width={500}
            height={600}
            className={styles.doctorImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
