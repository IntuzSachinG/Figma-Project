import Image from "next/image";
// import classes from "./bannerSection.module.css";
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

// import Link from "next/link";
// import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
// import classes from "./navbarSection.module.css";

// import Image from "next/image";
// import classes from "./heroSection.module.css";

import classes from "./mainHeader.module.css"



export default function MainHeader() {
  return (
    <>
       
          {/* <div className={classes.mainHeader}> */}

            <div className={classes.wrapper}>   
      <div className={classes.ContainerLogo}>
        {/* <div className={classes.ImageLogo}>
          
           <Image
            src="/Frame.png"
            alt="Confident Dental Care Clinic"
            width={41.49}
            height={41.51}
          /> 

          
        </div> */}

        
<Link href="/" className={classes.ImageLogo} aria-label="Go to home">
  <Image
    src="/Frame.png"
    alt=""
    width={42}
    height={42}
    priority
  />
</Link>
        <div className={classes.TextLogo}>
          <div className={classes.brand}>Confident</div>
          <div className={classes.sub}>Dental Care Clinic</div>
        </div>
      </div>

      <div className={classes.info}>
        <div className={classes.location}>
          <span className={classes.icon1}>
            {/* <TfiLocationPin />{" "} */}
            <Image src="/location1.svg" alt="loca" width={19} height={24}/>
          </span>
          {/* <span className={classes.text1}>St. <span className={classes.san}>Sanguin</span> Number 40</span> */}

           <span className={classes.text1}>St. Sanguin Number 40</span>
        </div>
        <div className={classes.phone}>
          <span className={classes.icon2}>
            {/* <FiPhone /> */}
             <Image src="/phone1.svg" alt="loca" width={24} height={24}/>
          </span>
          <span className={classes.text2}>+1234 - 4567 - 890</span>
        </div>
      </div>

      {/* <button className={classes.button}>
        <span className={classes.textbtn}>APPOINTMENT</span>
      </button> */}

      <Link href="/#" className={classes.button}>
       <span className={classes.textbtn}>APPOINTMENT</span>
     </Link>
    </div>

    {/* !! Navbar */}

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

    {/* !! Hero */}

    <div className={classes.hero}>
      <div className={classes.left}>
        <div className={classes.content}>
          <div className={classes.content1}>

            <div><span className={classes.tag}>WELCOME TO CONFIDENT</span></div> 

            {/* <div className={classes.tag}>WELCOME TO CONFIDENT</div> */}

            <div className={classes.textcont}>
            <h1>
              High Quality & <br />
              <span>Painless</span> Dentistry
            </h1>
          </div>
          </div>
          
          

          <div className={classes.para}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua ut enim ad minim veniam, quis nostrud.
            </p>
          </div>
        </div>

        <div className={classes.actions}>
          <div className={classes.btn7}>
            <button className={classes.primaryBtn}>
              <span className={classes.textc}>CONTACT US</span>
            </button>
          </div>

          <div className={classes.video}>
            <span className={classes.play}>
              <Image src="/play.svg" alt="play button" width={36} height={36} />
            </span>
            <span className={classes.textwatch}>Watch Video Profile</span>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.circle}>
          <Image
            src="/Group 17.svg"
            alt="Doctor"
            width={648}
            height={648}
            priority
          />
          <Image
            src="/Item 04.svg"
            alt="Doctor"
            width={237}
            height={94}
            priority
            className={classes.imgdoc}
          />
        </div>
      </div>
    </div>

          {/* </div> */}
    </>
 
  );
}
