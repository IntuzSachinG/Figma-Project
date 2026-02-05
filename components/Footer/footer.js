"use client";
import Image from "next/image";
import classes from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.brand}>
            <div className={classes.logo}>
              <Image
                src="/Frame.png"
                alt="Dental Clinic"
                width={40}
                height={40}
              />
              <div>
                <h3>Confident</h3>
                <span>Dental Care Clinic</span>
              </div>
            </div>

            <form
              className={classes.subscribe}
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="email" placeholder="Your Email Here..." />
              <button type="submit" aria-label="Subscribe">
                <span>
                  <Image
                    src="/Latest.svg"
                    alt="Latest"
                    width={31}
                    height={31}
                  />
                </span>
              </button>
            </form>
          </div>

          <div className={classes.socials}>
            <Link href="/#">
              <Image
                src="/INSTAGRAM.svg"
                alt="Instagram"
                width={18}
                height={18}
              />
            </Link>
            <Link href="/#">
              <Image
                src="/FACEBOOK.svg"
                alt="Facebook"
                width={18}
                height={18}
              />
            </Link>
            <Link href="/#">
              <Image src="/LINKDLN.svg" alt="LinkedIn" width={18} height={18} />
            </Link>
            <Link href="/#">
              <Image src="/TWITTER.svg" alt="X" width={18} height={18} />
            </Link>
          </div>
        </div>

        <div className={classes.line}></div>

        <div className={classes.bottom}>
          <div className={classes.hours}>
            <h4>working hours</h4>

            <div className={classes.timeRow}>
              <span>Mon - Fri</span>
              <span>9AM - 8PM</span>
            </div>

            <div className={classes.timeRow}>
              <span>Sat - Sun</span>
              <span>9AM - 8PM</span>
            </div>

            <p className={classes.copy}>© 2026 CONFIDENT All Right Reserved.</p>
          </div>

          <div className={classes.line1}></div>

          <div className={classes.links}>
            <div>
              <h4>About</h4>
              <a>Home</a>
              <a>About Us</a>
              <a>Services</a>
              <a>Pages</a>
              <a>Contact</a>
            </div>

            <div>
              <h4>Pages</h4>
              <a>Services</a>
              <a>Dentist</a>
              <a>Pricing</a>
              <a>Contact</a>
              <a>404 Page</a>
            </div>

            <div>
              <h4>Support</h4>
              <a>Contact Us</a>
              <a>Booking online</a>
              <a>Social Media</a>
            </div>

            <div>
              <h4>Contact Us</h4>
              <a>Social Media</a>
              <a>WhatsApp</a>
              <a>Email</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
