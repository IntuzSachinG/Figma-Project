import Image from "next/image";
import classes from "./ctaBanner.module.css";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

export default function AppointmentBanner() {
  return (
    <div className={classes.bannerContainer}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.textt}>
            <div className={classes.textfirst}>
              <div className={classes.subTitle}>Book Dental Appointment</div>
              <div className={classes.mainTitle}>
                Get <span className={classes.highlight}>10%-Off</span> Your{" "}
              </div>
              <div className={classes.tx2}>First Visit</div>
            </div>
            <p className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          <div className={classes.button}>
            <div className={classes.btntextt}>
              <div className={classes.book}>
                <Link href="#">BOOK NOW</Link>
              </div>
              <div className={classes.btniconn}>
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.imageWrapper}>
          <Image
            src="/Item 03.svg"
            alt="Dental Professional"
            width={390}
            height={559}
            className={classes.doctorImage}
            priority
          />
        </div>
      </div>
    </div>
  );
}
