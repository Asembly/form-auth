'use client'
import { signOut } from "next-auth/react";
import styles from "../../styles/ui/Button.module.scss"

function SignOutButton() {
  return (
    <>
      <div className={styles.button}>
        <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/auth/signin' })}>SignOut</button>
      </div >
    </>
  )
}

export { SignOutButton }
