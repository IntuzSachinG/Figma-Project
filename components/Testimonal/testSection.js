import Image from "next/image";
import classes from "./testSection.module.css";
import { MdStar, MdStarBorder } from "react-icons/md";

const testimonials = [
  {
    id: 1,
    img: "/Group 38.svg",
    name: "Ryan Gigs",
    role: "Patient",
    rating: 5,
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.",
  },
  {
    id: 2,
    img: "/Group 38 (1).svg",
    name: "Sophia Lee",
    role: "Patient",
    rating: 4,
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
  },
  {
    id: 3,
    img: "/Group 38 (2).svg",
    name: "Michael John",
    role: "Patient",
    rating: 5,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
  },
  {
    id: 4,
    img: "/Group 38 (3).svg",
    name: "Emma Watson",
    role: "Patient",
    rating: 4,
    text: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.",
  },
];

function TestimonialCard({ data }) {
  return (
    <div className={classes.card}>
      <div className={classes.cardAvatar}>
        <Image src={data.img} alt={data.name} width={48} height={48} />
      </div>

      <div className={classes.stars}>
        {[...Array(5)].map((_, i) =>
          i < data.rating ? <MdStar key={i} /> : <MdStarBorder key={i} />,
        )}
      </div>

      <p className={classes.text}>{data.text}</p>

      <div className={classes.author}>
        <strong>{data.name}</strong>
        <span>{data.role}</span>
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
            <Image src="/Group 37.svg" alt="" width={472} height={410} />
          </div>
        </div>

        <div className={classes.cards}>
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
