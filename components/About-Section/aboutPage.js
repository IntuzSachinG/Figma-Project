import Image from "next/image";
import classes from "./aboutPage.module.css";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  return (
    <div className={classes.container}>
      <div className={classes.imageWrap}>
        <Image
          src="/Group 22.svg"
          alt="image"
          width={491}
          height={523}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      <div className={classes.content}>
        <span className={classes.label}>ABOUT US</span>

        <h2>
          Your <span>Trusted Partner</span> For <br />
          Dental Health
        </h2>

        <p>
          Our team is dedicated to providing the best possible dental care for
          you. A healthy smile is a happy smile we help you achieve both!
        </p>

        <div className={classes.features}>
          <div>
            <FaCheckCircle /> Modern Equipment
          </div>
          <div>
            <FaCheckCircle /> Comfortable Clinic
          </div>
          <div>
            <FaCheckCircle /> Easy Online Appointment
          </div>
          <div>
            <FaCheckCircle /> Always Monitored
          </div>
        </div>
        <div className={classes.btnn}>
          <span className={classes.readMore}>READ MORE</span>
          <div className={classes.icon4}>
          <Image src="/Right.svg" alt="icon" width={14} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
}
