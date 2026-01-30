import Image from "next/image";
import classes from "./clinicPartner.module.css";

export default function ClinicPartners() {
  return (
    <section className={classes.section}>
      <span className={classes.label}>OUR CLINIC PARTNERS</span>

      <div className={classes.container}>
        <Image src="/1.jpg" alt="Techbrand" width={140} height={40} />
        <Image src="/2.svg" alt="Techbrand" width={140} height={40} />
        <Image src="/3.png" alt="Techbrand" width={140} height={40} />
        <Image src="/4.png" alt="Techbrand" width={140} height={40} />
        <Image src="/5.png" alt="Techbrand" width={140} height={40} />
      </div>
    </section>
  );
}
