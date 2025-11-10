import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.overlay}>
      <div className={styles.stream}>
        <h1>This is where the stream goes</h1>
      </div>
      <div className={styles.frameRight}>
        <h1>This is a stream overlay (tbd)</h1>
        <div className={styles.chat}>This is chat</div>
      </div>
      <div className={styles.frameBottom}>
        <h1>This is the overlay footer</h1>
      </div>
    </div>
  );
}
