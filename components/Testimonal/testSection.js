import Image from "next/image";
import classes from "./testSection.module.css";
import { MdStarBorder } from "react-icons/md";


function TestimonialCard() {
  return (
    <div className={classes.card}>
      <div className={classes.cardAvatar}>
        <Image src="/user4.jpg" alt="" width={48} height={48} />
      </div>

      <div className={classes.stars}><MdStarBorder /><MdStarBorder /><MdStarBorder /><MdStarBorder /><MdStarBorder /></div>

      <p className={classes.text}>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
        impedit quo minus id quod.
      </p>

      <div className={classes.author}>
        <strong>Ryan Gigs</strong>
        <span>Patient</span>
      </div>
    </div>
  );
}


export default function TestimonialSection() {
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.left}>
          <span className={classes.label}>TESTIMONIAL</span>

          <h2 className={classes.heading}>
            Enhancing Your Smile & <br />
            <span>Your Confidence</span>
          </h2>

          <div className={classes.orbit}>
            <div className={classes.circle} />

            <div className={`${classes.avatar} ${classes.avatar1}`}>
              <Image src="/user1.jpg" alt="" width={56} height={56} />
            </div>

            <div className={`${classes.avatar} ${classes.avatar2}`}>
              <Image src="/user2.jpg" alt="" width={56} height={56} />
            </div>

            <div className={`${classes.avatar} ${classes.avatar3}`}>
              <Image src="/user3.jpg" alt="" width={56} height={56} />
            </div>

            <div className={classes.badge}>Very Good Experience...</div>
            <div className={classes.badgeSmall}>Very Good Service...</div>
          </div>
        </div>

        <div className={classes.cards}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}

