import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import classes from "./blog.module.css";

function BlogCard({ image }) {
  return (
    <div className={classes.smallCard}>
      <Image src={image} alt="" fill className={classes.image} />

      <div className={classes.overlay}>
        <span className={classes.date}>December 15, 2024</span>
        <p className={classes.text}>
          Highlight: benefits of routine dental check-ups in children under 12
          years old
        </p>
        <span className={classes.read}>
          READ MORE{" "}
          <span>
            <Image src="/Right.svg" alt="icon" width={14} height={13} />{" "}
          </span>{" "}
        </span>
      </div>
    </div>
  );
}

export default function BlogSection() {
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div>
            <span className={classes.label}>OUR BLOG</span>
            <h2 className={classes.title}>Our Latest Blog & News</h2>
          </div>

          <button className={classes.button7}>
            <span className={classes.text8}>FIND MORE</span>
            <span className={classes.arrow9}>
              <MdArrowForwardIos />
            </span>
          </button>
        </div>

        <div className={classes.grid}>
          <div className={classes.bigCard}>
            <Image
              src="/Mask group.svg"
              alt=""
              fill
              className={classes.image}
            />

            <div className={classes.overlay}>
              <span className={classes.date}>December 15, 2024</span>
              <p className={classes.text}>
                Highlight: benefits of routine dental check-ups in children
                under 12 years old
              </p>
              <span className={classes.read}>
                READ MORE{" "}
                <span>
                  <Image
                    src="/Right.svg"
                    alt="icon"
                    width={14}
                    height={13}
                  />{" "}
                </span>
              </span>
            </div>
          </div>
          <div className={classes.right}>
            <BlogCard image="/Mask group (1).svg" />
            <BlogCard image="/Mask group (2).svg" />
          </div>
        </div>
      </div>
    </section>
  );
}