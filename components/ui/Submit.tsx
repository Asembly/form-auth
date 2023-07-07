import styles from "../../styles/ui/Button.module.scss"

function Button() {
  return (
    <>
      <div className={styles.button}>
        <button type="submit">Submit</button>
      </div>
    </>
  )
}

export { Button }
