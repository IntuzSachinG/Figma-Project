import Image from "next/image";
import classes from "./heroSection.module.css";

export default function Hero() {
  return (
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
            Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam,quis nostrud.
          </p>
        </div>

        <div className={classes.actions}>
          <div className={classes.btn7}>
            <button className={classes.primaryBtn}>
              {" "}
              <span className={classes.textc}>CONTACT US</span>
            </button>
          </div>

          <div className={classes.video}>
            <span className={classes.play}>
              <Image src="/play.svg" alt="play button" width={36} height={36} />
            </span>
            <span className={classes.textwatch}>Watch Video Profile</span>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.circle}>
          <Image
            src="/Group 17.svg"
            alt="Doctor"
            width={648}
            height={648}
            priority
          />
          <Image
            src="/Item 04.svg"
            alt="Doctor"
            width={237}
            height={94}
            priority
            className={classes.imgdoc}
          />
        </div>
      </div>
    </div>
  );
}
