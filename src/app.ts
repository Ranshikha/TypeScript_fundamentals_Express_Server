import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/routes";

//creating a vaariable which will send the data through express
// App will be providing me value of express js that is the entire function

//With the help we can send any type of value in the response.

//dynamic port
dotenv.config();

const app = express();
// const port =8080;
// const port = 8000 || process.env.PORT;
const port = process.env.PORT;
app.set("port",port)//set is here a map


// app.use("/",router)
app.use("/home",router)// we can use this to define multiple routes at one place
app.use("/user",router)

app.get("/profile  ",(req,res)=>{// in here we can provide for routes
    // res.send("flutter Bootcamp");
    res.send({
        verified:false,
        data: "Ranshikha",  
    });
});

app.listen(app.get("port"),()=>{
    console.log(`Server is running over port ${app.get("port")}`);
});

//suppose when we deploy app on heroku, it gives certain port numbers, for it we use dotenv..when we deploy on heroku, value in env.PORT becomes handy