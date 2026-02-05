import Image from "next/image";
import classes from "./serviceList.module.css";
import Link from "next/link";

const services = [
  {
    title: "Lawn Fertilization",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    iconSrc: "/Group 25 (4).svg",
    bgColor: "#e0f7ff",
  },
  {
    title: "Dental Bridge",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    iconSrc: "/Group 25.svg",
    bgColor: "#fff2e6",
  },
  {
    title: "General Dentistry",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    iconSrc: "/Group 25 (1).svg",
    bgColor: "#f0f4ff",
  },
  {
    title: "Cavity Inspection",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    iconSrc: "/Group 25 (2).svg",
    bgColor: "#fff9e6",
  },
  {
    title: "Live Advisory",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    iconSrc: "/Group 25 (3).svg",
    bgColor: "#f9ebe1",
  },
];

export default function ServicesSection() {
  return (
    <div className={classes.container}>
      <p className={classes.subTitle}>What We Provide</p>
      <h2 className={classes.mainTitle}>
        What <span className={classes.blueText}>The Treatments</span> <br /> Do
        We Offer?
      </h2>

      <div className={classes.grid}>
        {services.map((item, i) => (
          <div key={i} className={classes.card}>
            <div
              className={classes.iconWrapper}
              style={{ backgroundColor: item.bg }}
            >
              <Image
                src={item.iconSrc}
                alt={item.title}
                width={30}
                height={30}
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <Link href="/#" className={classes.learnMore}>
              Learn More<span className={classes.icon}><Image src="/Right.svg" alt="icon" width={14} height={12} /></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
