import Image from "next/image";
import classes from "./bannerSection.module.css";
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

export default function TopInfoBanner() {
  return (
     

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


  );
}
