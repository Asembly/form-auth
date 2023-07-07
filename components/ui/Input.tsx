import styles from "../../styles/ui/Input.module.scss"

function Input({ type, title }: { type: string, title: string }) {
  return (
    <>
      <div className={styles.input}>
        <div>
          <label htmlFor={title}>{title}</label>
        </div>
        <div>
          <input type={type} id={title} name={title} placeholder="Click for typing" />
        </div>
      </div>
    </>
  )
}

export { Input }
