import express from "express";
import 'dotenv/config'
import { bootstrap } from "./src/app.controller.js";
const app = express();


bootstrap(app , express);


app.listen(4444 , ()=>{
    console.log(`server is running om port 3000`);
    
})