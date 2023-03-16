import NextAuth from 'next-auth'

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
      async authorize(credentials, req) {
        console.log("Holaaaa")
        return(true)
        // Add logic here to look up the user from the credentials supplied
        
        //busco a la db i retorno user
        
      /*             
        let user = await db.collection("users").findOne(
            { email: credentials.username,
              password: md5(credentials.password)  
             },
            );
        
        if (!user) throw (res.status(405).json({
            Status: "OK",
            ErrorCode: "02",
            Description:"invalid email / password"
             
        }));
        else {
         
            var token = jwt.sign({ userId: user._id.toString(), expiresAt: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000) }, process.env.TOKEN_SECRET);
            
            var session = await db.collection("session").insertOne({
                token: token, 
                expiresAt: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
                userId: user._id  
       })
    }    
    res.status(200).json({
        Status: "OK",
        token: token,
        userId: user._id,
        
    });   
*/

      }
    })
  ]
  
 
})