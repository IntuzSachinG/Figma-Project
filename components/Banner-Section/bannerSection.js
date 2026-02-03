import Image from "next/image";
import classes from "./bannerSection.module.css";
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";

export default function TopInfoBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <div className={classes.logoimage}>
          <Image
            src="/Frame.png"
            alt="Confident Dental Care Clinic"
            width={42}
            height={42}
          />
        </div>
        <div className={classes.logoText}>
          <div className={classes.brand}>Confident</div>
          <div className={classes.sub}>Dental Care Clinic</div>
        </div>
      </div>

      <div className={classes.info}>
        <div className={classes.location}>
          <span className={classes.icon1}>
            <TfiLocationPin />{" "}
          </span>
          <span className={classes.text1}>St. Sanguin Number 40</span>
        </div>
        <div className={classes.phone}>
          <span className={classes.icon2}>
            <FiPhone />
          </span>
          <span className={classes.text2}>+1234 - 4567 - 890</span>
        </div>
      </div>

      <button className={classes.button}>
        <span className={classes.textbtn}>APPOINTMENT</span>
      </button>
    </div>
  );
}
