import NextAuth from 'next-auth'
import md5 from "md5";
import CredentialsProvider from 'next-auth/providers/credentials'
import clientPromise from "../../../lib/mongodb";


const client = await clientPromise;
const db = client.db(process.env.NEXT_DATABASE_NAME);
   
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

        let user = await db.collection("users").findOne(
          { email: username },
          );
          
          
          if(user.password == md5p) return {user}  
        

        return null
        
      }
    })
  ],
  pages:{
    SignIn: "/login"
  },
  callbacks: {
    jwt: async ({ token, user }) => {
         if (user) {
          console.log("checking user", user)
          token.user = { ...user, isAdmin: user.user.email === "jordi@hashbrowns.dev" }; 
        }
        return token
    },
    session: async ({ session, token }) => {
        session.user = token.user
        return session
    },
    secret: process.env.NEXTAUTH_SECRET, 

}

  
 
})