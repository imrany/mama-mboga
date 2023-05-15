import express from "express"
import { 
    createOrder,
    pay_of_order,
    checkOrder
} from "../controller/orders"
import{
    token,
    stkPush,
    callBack,
    getTransaction
} from '../controller/mpesa'
import { 
    login, register
 } from "../controller/user"
const router=express.Router()

router.post("/pay/:id",token,stkPush,pay_of_order)
router.get("/order/:id",checkOrder)
router.post('/create_order/:id',createOrder)
router.post('/auth/register', register)
router.post('/auth/login',login)

router.post('/stkpush',token,stkPush);
router.post('/callback',callBack);
router.get("/transaction", getTransaction)


export default router