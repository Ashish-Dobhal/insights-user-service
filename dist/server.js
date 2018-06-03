"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var sequelize_1 = __importDefault(require("./sequelize"));
var logger = require('winston');
var app = express_1.default();
// The port the express app will listen on
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/api/insights/register', function (req, res) {
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
app.use('/liveness', function (req, res) {
    logger.debug("/liveness");
    res.send("Insights: learn,share,grow");
});
// Serve the application at the given port
app.listen(port, function () {
    //TODO: create DB on server startup
    logger.debug("Create Insights DB");
    sequelize_1.default;
    console.log("Listening at http://localhost:" + port + "/");
});
