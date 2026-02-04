import Image from "next/image";
import styles from "./serviceList.module.css";
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
    <div className={styles.container}>
      <p className={styles.subTitle}>What We Provide</p>
      <h2 className={styles.mainTitle}>
        What <span className={styles.blueText}>The Treatments</span> <br /> Do
        We Offer?
      </h2>

      <div className={styles.grid}>
        {services.map((item, i) => (
          <div key={i} className={styles.card}>
            <div
              className={styles.iconWrapper}
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
            <Link href="/#" className={styles.learnMore}>
              Learn More<span className={styles.icon}><Image src="/Right.svg" alt="icon" width={14} height={12} /></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
