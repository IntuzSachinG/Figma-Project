import Image from "next/image";
import classes from "./bannerSection.module.css"
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";


export default function TopInfoBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.banner}>
        <div className={classes.logo}>
          <Image
            src="/Frame.png"
            alt="Confident Dental Care Clinic"
            width={34}
            height={34}
            className={classes.imglogo}
          />
          <div className={classes.logoText}>
            <span className={classes.brand}>Confident</span>
            <span className={classes.sub}>Dental Care Clinic</span>
          </div>
        </div>

        <div className={classes.info}>
          <div className={classes.infoItem1}>
            <span className={classes.icon1}><TfiLocationPin/> </span>
            <span className={classes.text1}>St. Sanguin Number 40</span>
          </div>

          <div className={classes.infoItem2}>
            <span className={classes.icon2}><FiPhone/> </span>
            <span className={classes.text2}>+1234 - 4567 - 890</span>
          </div>
        </div>

        <button className={classes.btn}><span className={classes.textbtn}>APPOINTMENT</span></button>
      </div>
    </div>

  );
}
