import express from "express"
import { 
    createOrder,
    pay_of_order,
    checkOrder
} from "../controller/orders.js"

import { 
    login, register
 } from "../controller/user.js"

const routes=express.Router()

routes.post("/pay/:id",pay_of_order)
routes.get("/order/:id",checkOrder)
routes.post('/create_order/:id',createOrder)
routes.post('/auth/register', register)
routes.post('/auth/login',login)

export default routes
