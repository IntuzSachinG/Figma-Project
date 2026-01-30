import Image from "next/image";
import classes from "./ctaBanner.module.css"

export default function AppointmentBanner() {
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.content}>
          <span className={classes.tagline}>BOOK DENTAL APPOINTMENT</span>

          <h2 className={classes.heading}>
            Get <span>10%-Off</span> Your <br />
            First Visit
          </h2>

          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>

          <button className={classes.button}>
            BOOK NOW <span></span>
          </button>
        </div>

        <div className={classes.imageWrapper}>
          <Image
            src="/Item 03.svg" 
            alt="Doctor"
            fill
            priority
            className={classes.image}
          />
        </div>
      </div>
    </section>
  );
}
