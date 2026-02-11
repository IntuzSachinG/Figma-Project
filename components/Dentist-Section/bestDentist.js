import Image from "next/image";
import styles from "./bestDentist.module.css";
import Link from "next/link";

export default function DentistSection() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.tag}>OUR BEST DENTIST</div>
        <div className={styles.text}>
          Dentist For Specialized And <br />
          <div className={styles.span1}>Experienced Dentistry</div>
        </div>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <div className={styles.image1}>
            <Image src="/Doctor3.svg" alt="" width={289} height={275} />
          </div>
          <div className={styles.cardInfo1}>
            <h1 className={styles.text21}>Dr. Marteen Bryant</h1>
            <h1 className={styles.desc}>General dentist</h1>
          </div>
        </div>

        <div className={`${styles.card} ${styles.activeCard}`}>
          <div className={styles.image1}>
            <Image src="/Doctor2.svg" alt="" width={289} height={275} />
          </div>
          <div className={styles.cardInfo2}>
            <h1 className={styles.text22}>Dr. Julia Barbara</h1>
            <h1 className={styles.desc1}>General dentist</h1>

            <div className={styles.socials}>
              <span>
                <Image src="/INSTAGRAM1.svg" alt="" width={41} height={40} />
              </span>
              <span>
                <Image src="/FACEBOOK1.svg" alt="" width={41} height={40} />
              </span>
              <span>
                <Image src="/LINKDLN1.svg" alt="" width={41} height={40} />
              </span>
              <span>
                <Image src="/TWITTER1.svg" alt="" width={41} height={40} />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.image1}>
            <Image src="/Doctor1.svg" alt="" width={289} height={275} />
          </div>
          <div className={styles.cardInfo1}>
            <h1 className={styles.text21}>Dr. Natasha Smith</h1>
            <h1 className={styles.desc}>General dentist</h1>
          </div>
        </div>
      </div>
      <div className={styles.button1}>
        <span className={styles.A}>
          <Link href="/#">
            <Image src="/FORWARD1.svg" alt="" width={42} height={40} />
          </Link>
        </span>
        <span className={styles.B}>
          <Link href="/#">
            <Image src="/BACK1.svg" alt="" width={42} height={40} />
          </Link>
        </span>
      </div>

      <div className={styles.slider}>
        <Image src="/SLIDER.svg" alt="" width={142} height={14} />
      </div>
    </section>
  );
}
