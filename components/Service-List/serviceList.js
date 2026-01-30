import Image from "next/image";
import classes from "./serviceList.module.css";

const services = [
  {
    title: "Lawn Fertilization",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    icon: "/Group 25 (4).svg",
  },
  {
    title: "Dental Bridge",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    icon: "/Group 25.svg",
  },
  {
    title: "General Dentistry",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    icon: "/Group 25 (1).svg",
  },
  {
    title: "Cavity Inspection",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    icon: "/Group 25 (2).svg",
  },
  {
    title: "Live Advisory",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    icon: "/Group 25 (3).svg",
  },
];

export default function ServicesSection() {
  return (
    <section className={classes.servicesSection}>
      <div className={classes.container}>
        <span className={classes.label}>WHAT WE PROVIDE</span>

        <h2 className={classes.heading}>
          What <span>The Treatments</span> <br /> Do We Offer?
        </h2>

        <div className={classes.grid}>
          {services.map((item, index) => (
            <div key={index} className={classes.card}>
              <div className={classes.iconBox}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#">LEARN MORE →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
