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
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req, res) {
        const client = await clientPromise;
        const db = client.db("test");
             
      let user = await db.collection("users").findOne(
          { email: credentials.username,
            password: md5(credentials.password)  
            },
          );
                
          return(!user ? false : true)
               

      }
    })
  ],

  
 
})