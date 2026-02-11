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
                <Link href="/">
                  <span>
                    <Image
                      src="/Latest.svg"
                      alt="Latest"
                      width={35}
                      height={32}
                    />
                  </span>
                </Link>
              </button>
            </form>
          </div>

          <div className={classes.socials}>
            <Link href="/#">
              <Image
                src="/INSTAGRAM.svg"
                alt="Instagram"
                width={41}
                height={40}
              />
            </Link>
            <Link href="/#">
              <Image
                src="/FACEBOOK.svg"
                alt="Facebook"
                width={41}
                height={40}
              />
            </Link>
            <Link href="/#">
              <Image src="/LINKDLN.svg" alt="LinkedIn" width={41} height={40} />
            </Link>
            <Link href="/#">
              <Image src="/TWITTER.svg" alt="X" width={41} height={40} />
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
              <Link href="/#">Home</Link>
              <Link href="/#">About Us</Link>
              <Link href="/#">Services</Link>
              <Link href="/#">Pages</Link>
              <Link href="/#">Contact</Link>
            </div>

            <div>
              <h4>Pages</h4>
              <Link href="/#">Services</Link>
              <Link href="/#">Dentist</Link>
              <Link href="/#">Pricing</Link>
              <Link href="/#">Contact</Link>
              <Link href="/#">404 Page</Link>
            </div>

            <div>
              <h4>Support</h4>
              <Link href="/#">Contact Us</Link>
              <Link href="/#">Booking online</Link>
              <Link href="/#">Social Media</Link>
            </div>

            <div>
              <h4>Contact Us</h4>
              <Link href="/#">Social Media</Link>
              <Link href="/#">WhatsApp</Link>
              <Link href="/#">Email</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
