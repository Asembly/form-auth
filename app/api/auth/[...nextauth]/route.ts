import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { cookies } from "next/dist/client/components/headers"
var jwt = require('jsonwebtoken')

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "click for typing" },
        password: { label: "Password", type: "password", placeholder: "click for typing" }
      },
      async authorize(credentials) {
        const result = await fetch("http:///localhost:5000/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })

        const user = await result.json()

        if (user && result.ok) {
          const token = jwt.verify(user.access_token, process.env.NEXT_JWT_SECRET)
          cookies().set('Bearer', user.access_token)
          return { login: token.login, email: token.email }
        } else {
          alert('User not authorized')
        }

        return null
      },
    })
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    newUser: '/auth/signup'
  },
})

export { handler as GET, handler as POST }
