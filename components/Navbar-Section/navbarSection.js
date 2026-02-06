import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
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
            {/* Pages<IoIosArrowDown /> */}
            Pages<Image src="/Arrow.svg" alt="" width={13} height={14}/>
          </Link>
        </li>
        <li>
          <Link className={classes.link} href="/#">
            {/* Blog<IoIosArrowDown />  */}
            Blog<Image src="/Arrow.svg" alt="" width={13} height={14}/>
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
        {/* <button className={classes.searchBtn}>
          <Image src="/Search.png" alt="search" width={35} height={32} />
        </button> */}

        <Link
  href="/"
  className={classes.searchBtn}
  aria-label="Search"
>
  <Image
    src="/Search.png"
    alt=""
    width={35}
    height={32}
  />
</Link>
      </div>
    </nav>
  );
}
