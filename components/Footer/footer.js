import classes from "./footer.module.css"
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


function Column({ title, items }) {
  return (
    <div className={classes.column}>
      <h4>{title}</h4>
      {items.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
     
        <div className={classes.top}>
          <div className={classes.brand}>
            <div className={classes.logo}>
               <span>Confident</span>
            </div>
            <p className={classes.sub}>Dental Care Clinic</p>
          </div>

          <div className={classes.subscribe}>
            <input type="email" placeholder="Your Email Here..." />
            <button>→</button>
          </div>

          <div className={classes.social}>
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
            <BsTwitterX />
          </div>
        </div>

        <hr className={classes.divider} />

   
        <div className={classes.bottom}>
          <div className={classes.hours}>
            <h4>working hours</h4>

            <div className={classes.row}>
              <span>Mon - Fri</span>
              <span>9AM - 8PM</span>
            </div>

            <div className={classes.row}>
              <span>Sat - Sun</span>
              <span>9AM - 8PM</span>
            </div>

            <p className={classes.copy}>
               2026 CONFIDENT All Right Reserved.
            </p>
          </div>

          <div className={classes.links}>
            <Column
              title="About"
              items={["Home", "About Us", "Services", "Pages", "Contact"]}
            />
            <Column
              title="Pages"
              items={["Services", "Dentist", "Pricing", "Contact", "404 Page"]}
            />
            <Column
              title="Support"
              items={[
                "Contact Us",
                "Booking online",
                "Social Media",
              ]}
            />
            <Column
              title="Contact Us"
              items={["Social Media", "WhatsApp", "Email"]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

