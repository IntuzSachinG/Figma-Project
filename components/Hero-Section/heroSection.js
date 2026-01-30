import Image from "next/image";
import classes from "./heroSection.module.css";
import { FiPlay } from "react-icons/fi";

export default function Hero() {
  return (
    <section className={classes.heroWrapper}>
      <div className={classes.hero}>
        <div className={classes.left}>
          <div className={classes.content}>
            <span className={classes.tag}>WELCOME TO CONFIDENT</span>
            <div className={classes.textcont}>
              <h1>
                High Quality & <br />
                <span>Painless</span> Dentistry
              </h1>
            </div>

            <p className={classes.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam, quis nostrud.
            </p>
          </div>

          <div className={classes.actions}>
            <button className={classes.primaryBtn}>CONTACT US</button>

            <div className={classes.video}>
              <span className={classes.play}>
                <FiPlay />
              </span>
              <span>Watch Video Profile</span>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.circle}>
            <Image
              src="/Group 17.svg"
              alt="Doctor"
              width={360}
              height={460}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
