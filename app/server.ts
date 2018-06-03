import express from 'express';
import { User } from './models/user-model';
import * as bodyParser from "body-parser";
import UserModel from './sequelize';
import sequelize from './sequelize';
let logger = require('winston');
import  cookieParser  from "cookie-parser";
import session from "express-session";
 


//TODO configure winston logger
const app: express.Application = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

// The port the express app will listen on
const port = process.env.PORT || 3000;
app.use(session());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.post('/api/insights/register',function(req:any,res:any)
{
    console.log("/api/insights/register starts");
    console.log(req.body.username);
    //TODO: create a layered flow of data from 
    // userModel.registerUser(req.body.username, req.body.password, req.body.repassword)
    //{
        // userModel.validatePassword("pass","repass");
        // validatePassword() throw error if user does not exist else register user
    //TODO: RETURN VALUE of the register success
        //}
   

res.send("User created successfully");
});
// Mount the WelcomeController at the /welcome route
app.use('/liveness',function(req,res)
{
    logger.debug("/liveness"); 
    res.send("Insights: learn,share,grow");
});
app.use("/logs",function(req,err)
{
    //TODO: FIXME receive logs from the frontend client
})
// Serve the application at the given port
app.listen(port, () => {
    //TODO: create DB on server startup
    logger.debug("Create Insights DB");
    sequelize   
    console.log(`Listening at http://localhost:${port}/`);
});