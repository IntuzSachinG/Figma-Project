import Image from "next/image";
import classes from "./serviceList.module.css";
import Link from "next/link";

export function Card({ image, title, description, buttonText, variant }) {
  return (
    <div
      className={`${classes.card} ${
        variant === "large" ? classes.largeCard : ""
      }`}
    >
      <div className={classes.box11}>
        <div className={classes.img12}>
          <Image
            src={image}
            alt={title}
            width={86}
            height={86}
            className={classes.image}
          />
        </div>
        <div className={classes.content}>
          <div className={classes.txt}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.description}>{description}</p>
          </div>

          <Link href="/#" className={classes.learnMore}>
            Learn More
            <span className={classes.icon}>
              <Image src="/Right.svg" alt="icon" width={14} height={12} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div className={classes.container}>
      <div className={classes.textcontainer}>
        <div className={classes.texttitle}>
          <p className={classes.subTitle}>What We Provide</p>
        </div>
        <div className={classes.textmain}>
          <div className={classes.tx1}>
            What <span className={classes.blueText}> The Treatments</span>
          </div>
          <div className={classes.tx2}>
            Do We Offer<span className={classes.extra}>?</span>
          </div>
        </div>
      </div>

      <section className={classes.container1}>
        <div className={classes.rowTwo}>
          <Card
            image="/Group 25 (4).svg"
            title="lawn fertilization"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            buttonText="Learn More"
            variant="large"
          />
          <Card
            image="/Group 25.svg"
            title="DENTal bridge"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            buttonText="Learn More"
            variant="large"
          />
        </div>

        <div className={classes.rowThree}>
          <Card
            image="/Group 25 (1).svg"
            title="general dentistry"
            description="Lorem ipsum dolor sit amet, consectetur."
          />
          <Card
            image="/Group 25 (2).svg"
            title="cavity inspection"
            description="Lorem ipsum dolor sit amet, consectetur."
          />
          <Card
            image="/Group 25 (3).svg"
            title="live advisory"
            description="Lorem ipsum dolor sit amet, consectetur."
            buttonText="Learn More"
          />
        </div>
      </section>
    </div>
  );
}
