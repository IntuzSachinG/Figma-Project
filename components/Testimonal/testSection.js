import Image from "next/image";
import classes from "./testSection.module.css";
import { MdStar, MdStarBorder } from "react-icons/md";

const testimonials = [
  {
    id: 1,
    img: "/Group 38.svg",
    name: "Ryan Gigs",
    role: "Patient",
    rating: 4,
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.",
  },
  {
    id: 2,
    img: "/Group 38 (1).svg",
    name: "Ryan Gigs",
    role: "Patient",
    rating: 4,
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.",
  },
  {
    id: 3,
    img: "/Group 38 (2).svg",
    name: "Ryan Gigs",
    role: "Patient",
    rating: 4,
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.",
  },
  {
    id: 4,
    img: "/Group 38 (3).svg",
    name: "Ryan Gigs",
    role: "Patient",
    rating: 4,
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.",
  },
];

function TestimonialCard({ data, className }) {
  return (
    <div className={`${classes.card} ${className}`}>
      <div className={classes.cardAvatar}>
        <Image src={data.img} alt={data.name} width={95} height={64} />
      </div>

      <div className={classes.cardBody}>
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
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>
        <div className={classes.labelDiv}>TESTIMONIAL</div>

        <div className={classes.headingDiv}>
          <div className={classes.headingLine}>Enhancing Your Smile &</div>
          <div className={classes.headingHighlight}>Your Confidence</div>
        </div>
      </div>

      <div className={classes.orbitDiv}>
        <Image src="/Group 37.svg" alt="Orbit" width={472} height={410} />
      </div>

      <div className={classes.cardsWrapper}>
        {testimonials.map((item) => (
          <div className={classes.cardBox} key={item.id}>
            <TestimonialCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
