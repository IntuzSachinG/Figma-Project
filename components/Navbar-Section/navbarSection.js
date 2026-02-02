import Link from "next/link";
import classes from "./navbarSection.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";

export default function MainNavbar() {
  return (
    <nav className={classes.Navbar}>
      <ul className={classes.menu}>
        <Link className={classes.active} href="/#">
          Home
        </Link>
        <Link href="/#">About Us</Link>
        <Link href="/#">Services</Link>
        <Link href="/#">
          Pages <RiArrowDropDownLine />{" "}
        </Link>
        <Link href="/#">
          Blog <RiArrowDropDownLine />{" "}
        </Link>
        <Link href="/#">Contact</Link>
      </ul>

      <div className={classes.SearchBox}>
        <input
          type="text"
          placeholder="Search in here"
          className={classes.Input}
        />
        <button className={classes.searchBtn}>
          <Image src="/Search.png" alt="search icon" width={36} height={32} />
        </button>
      </div>
    </nav>
  );
}
