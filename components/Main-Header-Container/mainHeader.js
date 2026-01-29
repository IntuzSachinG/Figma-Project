import Image from "next/image";
import classes from "./mainHeader.module.css";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

export default function Header() {
  return (
    <div className={classes.maincontainer}>
      <header className={classes.banner}>
        <div className={classes.logo}>
          <Image
            src="/Frame.png"
            alt="Confident Dental Care Clinic"
            width={42}
            height={42}
          />
          <span>
            <div className={classes.logotext1}>Confident </div>
            <div className={classes.logotext2}>Dental Care Clinic</div>
          </span>
        </div>

        <div className={classes.contact}>
          <div className={classes.contactItem1}>
            <CiLocationOn />
            St. Sanguin Number 40
          </div>
          <div className={classes.contactItem2}>
            {" "}
            <FaPhoneAlt />
            +1234 - 4567 - 890
          </div>
        </div>

        <button className={classes.button}>Appointment</button>
      </header>

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

      <section className={classes.hero}>
        <div className={classes.heroLeft}>
          <span className={classes.welcome}>WELCOME TO CONFIDENT</span>

          <h1>
            High Quality & <br />
            <span>Painless</span> Dentistry
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam, quis nostrud.
          </p>

          <div className={classes.heroButtons}>
            <button className={classes.contactBtn}>Contact Us</button>
            <button className={classes.videoBtn}> Watch Video Profile</button>
          </div>
        </div>

        <div className={classes.heroRight}>
          <div className={classes.circle}>
            <Image
              src="/Group 17.svg"
              alt="Doctor"
              width={360}
              height={420}
              className={classes.doctor}
            />
          </div>
        </div>
      </section>

      <section className={classes.clinicPartners}>
        <p className={classes.partnerHeading}>OUR CLINIC PARTNERS</p>

        <div className={classes.partnerLogos}>
          <Image src="/partner1.svg" alt="Partner 1" width={120} height={40} />
          <Image src="/partner2.svg" alt="Partner 2" width={120} height={40} />
          <Image
            className={classes.partner3}
            src="/1.svg"
            alt="Partner 3"
            width={120}
            height={40}
          />
          <Image src="/partner4.svg" alt="Partner 4" width={120} height={40} />
          <Image src="/partner5.svg" alt="Partner 5" width={120} height={40} />
        </div>
      </section>

      <section className={classes.aboutSection}>
        <div className={classes.aboutLeft}>
          <div className={classes.aboutImage}>
            <Image src="/Group 22.svg" alt="Doctor" width={360} height={460} />
          </div>
        </div>

        <div className={classes.aboutRight}>
          <span className={classes.aboutLabel}>ABOUT US</span>

          <h2>
            Your <span>Trusted Partner</span> For <br /> Dental Health
          </h2>

          <p>
            Our team is dedicated to providing the best possible dental care for
            you. A healthy smile is a happy smile — we help you achieve both!
          </p>

          <div className={classes.aboutList}>
            <span> Modern Equipment</span>
            <span> Comfortable Clinic</span>
            <span>Easy Online Appointment</span>
            <span> Always Monitored</span>
          </div>

          <button className={classes.readMoreBtn}>READ MORE</button>
        </div>
      </section>
    </div>
  );
}
