import Image from "next/image";
import classes from "./clinicPartner.module.css";

export default function ClinicPartners() {
  return (
    <div className={classes.section}>
      <div className={classes.label}>OUR CLINIC PARTNERS</div>

      <div className={classes.container}>
        <ul className={classes.list}>
          <li className={classes.list1}>
            <Image src="/1.jpg" alt="Techbrand" width={200} height={54} />
          </li>
          <li className={classes.list2}>
            <Image src="/2.svg" alt="Techbrand" width={208} height={54} />
          </li>
          <li className={classes.list3}>
            <Image src="/3.png" alt="Techbrand" width={200} height={54} />
          </li>
          <li className={classes.list4}>
            <Image src="/4.png" alt="Techbrand" width={208} height={54} />
          </li>
          <li className={classes.list5}>
            <Image src="/5.png" alt="Techbrand" width={216} height={54} />
          </li>
        </ul>
      </div>
    </div>
  );
}
