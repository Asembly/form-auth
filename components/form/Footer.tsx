import Link from "next/link";
import styles from "../../styles/form/Footer.module.scss"

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div>
          <div>
            <h3>Supported by</h3>
          </div>
          <nav>
            <div>
              <Link href={"https://jwt.io/"}><img src="https://jwt.io/img/badge-compatible.svg" /></Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export { Footer };
