import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import routes  from "./routes/api.js"
dotenv.config()

const corsOptions={
    origin:["http://localhost:3000","127.0.0.1:3000"]
}

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(corsOptions))
app.use(routes)

const port=process.env.PORT||8080
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})