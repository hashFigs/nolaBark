import {authOptions} from "./auth/[...nextauth]";
import {getServerSession } from "next-auth";


export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    
    if(!session) {
        res.status(401).json({mesage: "you have to be loged in"})
    }
    else{
        res.status(200).json({name: "hello from protected"})
    }
 }