import Image from "next/image";
import classes from "./aboutPage.module.css";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.imageWrap}>
          <div className={classes.blueBg}></div>

          <Image
            src="/Group 22.svg"
            alt="Doctor"
            width={360}
            height={480}
            className={classes.doctorImg}
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

          <button className={classes.readMore}>READ MORE</button>
        </div>
      </div>
    </section>
  );
}
