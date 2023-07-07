import styles from "../../../styles/form/users/UserItem.module.scss"

function UserItem({ user }: { user: { login: string, email: string } }) {
  return (
    <>
      <div className={styles.userItem}>
        <div>
          <img src="https://jwt.io/img/icon.svg" />
        </div>
        <div>
          {user.login}
        </div>
        <div>
          {user.email}
        </div>
      </div>
    </>
  )
}

export { UserItem };
