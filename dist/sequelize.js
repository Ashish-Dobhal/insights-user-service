"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as logger from ("winston");
var logger = require('winston');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('insights', null, null, {
    dialect: "sqlite",
    storage: './insights.sqlite',
    operatorsAliases: false
});
//  MODELS
var UserModel = sequelize.define('User', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});
//  SYNC SCHEMA
sequelize
    .sync({ force: true })
    .then(function (success) {
    logger.log('sqlite-con', 'Sqlite db started');
}, function (err) {
    logger.error('sqlite-con-err', err);
});
exports.default = { UserModel: UserModel, sequelize: sequelize };
