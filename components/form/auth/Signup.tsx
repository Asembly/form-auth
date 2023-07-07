'use client'
import Link from "next/link"
import styles from "../../../styles/form/Form.module.scss"
import { Input } from "../../ui/Input"
import { useRouter } from "next/navigation"
import { Button } from "../../ui/Submit"
import { FormEventHandler } from "react"

function FormSignup() {

  const router = useRouter()

  const handle: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const object = {
      login: formData.get("login")?.toString(),
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
    }

    await fetch('http://localhost:3000/api/signup',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object)
      }).then((res) => {
        if (res.ok) {
          console.log("OK")
          router.push('/auth/signin')
          return res.json
        }
      }).catch((error) => console.log(error))
  }

  return (
    <>
      <form onSubmit={handle}>
        <div className={styles.form}>
          <Input type="text" title="login" />
          <Input type="email" title="email" />
          <Input type="password" title="password" />
          <Button />
          <Link href="/auth/signin" >Login</Link>
        </div>
      </form>
    </>
  )
}

export { FormSignup }
