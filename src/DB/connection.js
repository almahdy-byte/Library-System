import { connect } from "mongoose"



export const DBconnection = async()=>{
    try {
        await connect(process.env.DB_URI);
        console.log(`connect to DB Done`);
    } catch (error) {
        console.log(`connect to DB Failed`);
    }
}