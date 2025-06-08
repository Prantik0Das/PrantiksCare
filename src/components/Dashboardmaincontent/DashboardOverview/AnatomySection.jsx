import Anatomy from "../../../assets/Anatomy.png";
import styles from "./AnatomySection.module.css";

export default function AnatomySection() {
  return (
    <div className={styles.pict}>
      <img src={Anatomy} alt="My Image" className={styles.Anatomyx} />
    </div>
  );
}
