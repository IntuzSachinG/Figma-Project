import Image from "next/image";
import classes from "./blog.module.css";
import Link from "next/link";

export default function BlogSection() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.text1}>
          <div className={classes.txt}>
            <div className={classes.ftext}>OUR BLOG</div>
            <div className={classes.stext}>Our latest blog & news</div>
          </div>
          <div className={classes.btn}>
            <div className={classes.inner}>
              <div className={classes.txR}>FIND MORE</div>
              <div className={classes.iconA}>
                <Image src="/Right.svg" alt="icon" width={16} height={17} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cardBig}>
          <Image
            src="/Mask group.svg"
            alt="Blog"
            width={592}
            height={571}
            className={classes.image}
            priority
          />

          <div className={classes.overlay}>
            <span className={classes.date}>December 15, 2024</span>
            <p>
              Highlight: benefits of routine dental check-ups in <br /> children
              under 12 years old
            </p>

            <a href="#" className={classes.readMore}>
              READ MORE{" "}
              <span>
                <Image
                  src="/Right.svg"
                  alt="icon"
                  width={14}
                  height={13}
                />{" "}
              </span>
            </a>
          </div>
        </div>

        <div className={classes.cardRight}>
          <div className={classes.cardSmall}>
            <Image
              src="/Mask group (2).svg"
              alt="Blog"
              width={593}
              height={278}
              className={classes.image}
            />

            <div className={classes.overlay}>
              <span className={classes.date}>December 15, 2024</span>
              <p>
                Highlight: benefits of routine dental check-ups in <br />{" "}
                children under 12 years old
              </p>

              <a href="#" className={classes.readMore}>
                READ MORE{" "}
                <span>
                  <Image
                    src="/Right.svg"
                    alt="icon"
                    width={14}
                    height={13}
                  />{" "}
                </span>
              </a>
            </div>
          </div>

          <div className={classes.cardSmall}>
            <Image
              src="/Mask group (1).svg"
              alt="Blog"
              width={593}
              height={278}
              className={classes.image}
            />

            <div className={classes.overlay}>
              <span className={classes.date}>December 15, 2024</span>
              <p>
                Highlight: benefits of routine dental check-ups in <br />{" "}
                children under 12 years old
              </p>

              <a href="#" className={classes.readMore}>
                READ MORE{" "}
                <span>
                  <Image
                    src="/Right.svg"
                    alt="icon"
                    width={14}
                    height={13}
                  />{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
