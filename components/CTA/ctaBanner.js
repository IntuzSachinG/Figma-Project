import Image from "next/image";
import classes from "./ctaBanner.module.css";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

export default function AppointmentBanner() {
  return (
    <section className={classes.sectionWrapper}>
      <div className={classes.bannerContainer}>
        <div className={classes.content}>
          <p className={classes.subTitle}>Book Dental Appointment</p>
          <h1 className={classes.mainTitle}>
            Get <span className={classes.highlight}>10%-Off</span> Your <br />{" "}
            First Visit
          </h1>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <Link href="#" className={classes.button}>
            <span className={classes.text}>
              BOOK NOW <MdArrowForwardIos className={classes.icon} />
            </span>
          </Link>
        </div>

        <div className={classes.imageWrapper}>
          <Image
            src="/Item 03.svg"
            alt="Dental Professional"
            width={500}
            height={600}
            className={classes.doctorImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
