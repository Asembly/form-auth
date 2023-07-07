"use client"
import { useSession } from "next-auth/react"
import styles from "../../styles/form/profile/Profile.module.scss"
import { useRouter } from "next/navigation"

export default function Profile() {
  const session = useSession()
  const router = useRouter()

  const handler = () => {
    router.push("/")
  }

  return (
    <>
      <div className={styles.profile}>
        <div >
          Your Profile
          <div >
            {session.data?.user?.email}
          </div >
        </div>
        <div>
          <button onClick={handler}></button>
        </div>
      </div >
    </>
  )
}
