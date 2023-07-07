import { Loader } from "@/components/ui/loader/Loader";
import { UserList } from "@/components/ui/users/UserList";
import { Suspense } from "react";
import styles from "../../styles/pages/Users.module.scss"

export default async function Users() {
  return (
    <>
      <div className={styles.users}>
        <Suspense fallback={<Loader />}>
          <UserList />
        </Suspense>
      </div>
    </>
  )
}
