import styles from "./App.module.css";
import { IoMdRocket } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";

export function App() {
  return (
    <div>
      <header className={styles.header}>
        <IoMdRocket className={styles.rocket} />
        <h1 className={styles.to}>to</h1>
        <h1 className={styles.do}>do</h1>
      </header>
      <form className={styles.form} action="submit">
        <input
          onClick={styles.onClick}
          className={styles.formInput}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.formButton} type="submit">
          <span className={styles.buttonText}>
            Criar <AiOutlinePlusCircle />
          </span>
        </button>
      </form>
    </div>
  );
}
