import {Request, Response, NextFunction} from 'express'
import JWT from 'jsonwebtoken'


const Authorize=async function(req:Request, res:Response, next:NextFunction){
const authHeader=req.headers['authorization']
const token=authHeader && authHeader.split(' ')[1]
if(token==null) return res.status(401).json({message:"token not found"})

JWT.verify(token, process.env.ACCESS_TOKEN_SECRET||"", (error, user)=>{
    if(error) return res.status(403).json({message:"your token is no longer valid"})
    req.body=user
    next()
})
}

export default Authorize