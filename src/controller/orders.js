import pool from "../postgres";

export const createOrder=async(req,res)=>{
    try {
        const {
            car_id,
            firstName,
            lastName,
            email,
            phoneNumber,
            numberOfDays,
            numberOfLuggage,
            numberOfPerson,
            drive,
            fromAddress,
            toAddress,
            journeyTime,
            journeyDate,
            reason,
            amount,
            transactionOption,
            response
        }=req.data

        pool.query('INSERT INTO order (car_id, firstName, lastName, email, phoneNumber, numberOfDays, numberOfLuggage, numberOfPerson, drive, fromAddress, toAddress, journeyTime, journeyDate, reason, amount, transactionOption, MerchantRequestID) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *',
        [car_id, firstName, lastName, email, phoneNumber, numberOfDays, numberOfLuggage, numberOfPerson, drive, fromAddress, toAddress, journeyTime, journeyDate, reason, amount, transactionOption, response.MerchantRequestID], 
        (error, results) => {
            if (error) {
            res.send({error:error})
            }else{
                res.status(201).send({msg:`Car reserved with the ID: ${results.rows[0].car_id}`,results:results.rows[0]})
            }
        })
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

export const pay_of_order=async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

export const checkOrder=async(req,res)=>{
    try {
        const {id} = req.params
        pool.query('SELECT * FROM order WHERE id = $1', [id],
        (error, results) => {
            if (error) {
               res.send({error:error})
            }else if(!results.rows[0]){
                res.status(404).send({item:"Item available"})
            }else{
                res.status(200).send({item:"Item not available",results:results.rows[0]})
            }
        })
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}
