'use client'
import Link from "next/link"
import styles from "../../../styles/form/Form.module.scss"
import { Input } from "../../ui/Input"
import { FormEventHandler } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "../../ui/Submit"

function FormSignin() {

  const router = useRouter()

  const handle: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })

    if (res && !res.error) {
      router.push('/profile/')
    } else {
      alert("User not authorized")
    }

  }

  return (
    <>
      <form onSubmit={handle}>
        <div className={styles.form}>
          <Input type="email" title="email" />
          <Input type="password" title="password" />
          <Button />
          <Link href="/signup" >Registration</Link>
        </div>
      </form>
    </>
  )
}

export { FormSignin } 
