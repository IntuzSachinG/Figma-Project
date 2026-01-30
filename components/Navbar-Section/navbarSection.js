import Link from "next/link";
import classes from "./navbarSection.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchCircleOutline } from "react-icons/io5";

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
          <IoSearchCircleOutline />
        </button>
      </div>
    </nav>
  );
}
