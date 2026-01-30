import classes from "./statSection.module.css";

export default function StatsSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.item}>
          <span className={classes.number}>74</span>
          <span className={classes.label}>CLINICS</span>
        </div>

        <div className={classes.divider}></div>

        <div className={classes.item}>
          <span className={classes.number}>20</span>
          <span className={classes.label}>COUNTRY</span>
        </div>

        <div className={classes.divider}></div>

        <div className={classes.item}>
          <span className={classes.number}>19</span>
          <span className={classes.label}>YEARS</span>
        </div>

        <div className={classes.divider}></div>

        <div className={classes.item}>
          <span className={classes.number}>40</span>
          <span className={classes.label}>PARTNERS</span>
        </div>
      </div>
    </section>
  );
}
