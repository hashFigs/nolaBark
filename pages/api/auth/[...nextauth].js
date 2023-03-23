import NextAuth from 'next-auth'
import md5 from "md5";
import jwt from "jsonwebtoken"
import clientPromise from "../../../lib/mongodb";
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
     
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        
        const {username, password} = credentials;

        const md5p= md5(password)
        const res = await fetch("http://localhost:3000/api/users/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: username,
            password: password
          })
        })

        const user = await res.json();

        if(res.ok) return {user} 
        return null
        
      }
    })
  ],
  pages:{
    SignIn: "/login"
  },
  callbacks: {
    jwt: async ({ token, user }) => {
        user && (token.user = user)
        return token
    },
    session: async ({ session, token }) => {
        session.user = token.user
        return session
    }
}

  
 
})