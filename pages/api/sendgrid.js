import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
 

   try {
     const sended =  await sendgrid.send({
       to: "jordi@hashbrowns.dev", // Your email where you'll receive emails
       from: "jordi@hashbrowns.dev", // your website email address here
       subject: `TREME TAILS CONTACT FORM`,
       html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
       <html lang="en">
       <head>
         <meta charset="utf-8">

         <title>The HTML5 Herald</title>
         <meta name="description" content="The HTML5 Herald">
         <meta name="author" content="SitePoint">
       <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

         <link rel="stylesheet" href="css/styles.css?v=1.0">

       </head>

       <body>
         <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
               </div>
               <div class="container" style="margin-left: 20px;margin-right: 20px;">
               <h3>NAME: ${req.body.fullname},</h3> 
               <H3>EMAIL: ${req.body.email} </h3>
               <H3>PHONE: ${req.body.phone} </h3>
               <div style="font-size: 16px;">
               <p>Message:</p>
               <p>${req.body.message}</p>
               <br>
               </div>
               
               </div>
               </div>
       </body>
       </html>`,
     });
     console.log(sended);
     return{success:true}
   } catch (error) {
    console.log(error);
     return res.status(error.statusCode || 500).json({ error: error.message });
   }

}

export default sendEmail;
