"use client"
import Link from "next/link";
import styles from "../../styles/form/Header.module.scss"
import { useSession } from "next-auth/react"

function Header() {

  const session = useSession()

  if (session.status === "authenticated") {
    return (
      <>
        <div className={styles.header}>
          <div>
            <Link href="/users/" >Users</Link>
          </div>
          <div>
            <Link href="/profile/" >Profile</Link>
          </div>
          <div>
            <Link href="/auth/signout" >SignOut</Link>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className={styles.header}>
          <div>
            <Link href="/auth/signin" >SignIn</Link>
          </div>
        </div>
      </>
    )
  }

}

export { Header };
