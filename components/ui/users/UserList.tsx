import { cookies } from "next/dist/client/components/headers";
import { UserItem } from "./UserItem";
import styles from "../../../styles/form/users/UserList.module.scss"

async function getData() {

  const token = 'Bearer ' + cookies().get('Bearer')?.value
  console.log(cookies())

  const users = await fetch("http://localhost:3000/api/users", {
    method: "GET", headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
  })
  const data = await users.json().catch(error => console.log(error))
  return data;
}

async function UserList() {
  const users = await getData()

  return (
    <>
      <div className={styles.userList}>
        <div>
          <h1>
            User List
          </h1>
        </div>
        {
          users.map((user: any) => (
            <div key={user.id}>
              <UserItem user={user} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export { UserList }
