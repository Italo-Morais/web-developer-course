import styles from "./App.module.css";
import { IoMdRocket } from "react-icons/io";

export function App() {
  return (
    <div>
      <header className={styles.header}>
        <IoMdRocket className={styles.rocket} />
        <h1 className={styles.to}>to</h1>
        <h1 className={styles.do}>do</h1>
      </header>
    </div>
  );
}
