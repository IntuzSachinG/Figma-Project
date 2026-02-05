import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import classes from "./navbarSection.module.css";

export default function MainNavbar() {
  return (
    <nav className={classes.Navbar}>
      <ul className={classes.menu}>
        <li>
          <Link className={classes.active} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={classes.link} href="/#">
            About Us
          </Link>
        </li>
        <li>
          <Link className={classes.link} href="/#">
            Services
          </Link>
        </li>
        <li>
          <Link className={classes.link} href="/#">
            Pages <RiArrowDropDownLine />
          </Link>
        </li>
        <li>
          <Link className={classes.link} href="/#">
            Blog <RiArrowDropDownLine />
          </Link>
        </li>
        <li>
          <Link className={classes.link} href="/#">
            Contact
          </Link>
        </li>
      </ul>

      <div className={classes.SearchBox}>
        <input
          type="text"
          placeholder="Search In here"
          className={classes.Input}
        />
        <button className={classes.searchBtn}>
          <Image src="/Search.png" alt="search" width={35} height={32} />
        </button>
      </div>
    </nav>
  );
}
