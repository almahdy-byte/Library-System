import express from "express";
import 'dotenv/config'
import { bootstrap } from "./src/app.controller.js";
const app = express();


bootstrap(app , express);


app.listen(process.env.PORT , ()=>{
    console.log(`server is running successfully `);
    
})