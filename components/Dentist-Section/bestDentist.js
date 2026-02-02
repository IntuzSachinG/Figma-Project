import Image from "next/image";
import classes from "./bestDentist.module.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export default function DentistSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <span className={classes.label}>OUR BEST DENTIST</span>

        <h2 className={classes.heading}>
          Dentist For Specialized And <br />
          <span>Experienced Dentistry</span>
        </h2>

        <div className={classes.slider}>
          <button className={classes.arrowLeft} aria-label="Previous">
            <IoChevronBackOutline />
          </button>

          <div className={classes.cards}>
            <div className={classes.card}>
              <Image
                src="/Dentist1.svg"
                alt="Dentist 1"
                width={240}
                height={300}
                className={classes.image}
              />
            </div>

            <div className={`${classes.card} ${classes.active}`}>
              <Image
                src="/Dentist2.svg"
                alt="Dentist 2"
                width={240}
                height={300}
                className={classes.image}
              />
            </div>

            <div className={classes.card}>
              <Image
                src="/Dentist3.svg"
                alt="Dentist 3"
                width={240}
                height={300}
                className={classes.image}
              />
            </div>
          </div>

          <button className={classes.arrowRight} aria-label="Next">
            <IoIosArrowForward />
          </button>
        </div>

        <div className={classes.dots}>
          <span></span>
          <span className={classes.activeDot}></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}


