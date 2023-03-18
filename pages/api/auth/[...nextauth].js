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
        console.log("username", username);
        console.log("password", password);
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

        console.log("resss", user.email) 
        if(user.email){
          console.log("tonotttoo")
        }
        
         return( user.email ? true : null)
      /*
      const client = await clientPromise;
      const db = client.db("test");
             
      let user = await db.collection("users").findOne(
          { email: credentials.username,
            password: md5(credentials.password)  
            },
          );
                
          return(!user ? null : user)
               
*/
      }
    })
  ],

  
 
})