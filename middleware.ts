export { default } from "next-auth/middleware"

export const config = { matcher: ["/profile", "/users", "/auth/signout"] }
