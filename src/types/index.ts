type orderBody={
   id:string,
   username:string,
   location:string,
   phone_number:number,
   amount_paid:number
}

type user_info_body={
    id:string,
    username:string,
    email?:string,
    phone_number:number,
    password:string,
}
interface user_info{
    body:user_info_body
}


type reserveBody={
    car_id:number,
    phoneNumber:number,
    amount:number,
    firstName:string,
    lastName:string,
    email:string,
    numberOfDays:string,
    numberOfLuggage:string,
    numberOfPerson:string,
    drive:string,
    fromAddress:string,
    toAddress:string,
    journeyTime:string,
    journeyDate:string,
    reason:string,
    transactionOption:string,
    response:any
}
export interface reserveRequest{
    body:reserveBody,
    token:string,
    data:reserveBody
}

export type{
    user_info,
}