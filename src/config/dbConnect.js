import mongoose from "mongoose"
import dotenv from "dotenv";

//usado para estabelecer a conexeção com o bd mongo atlas e meu .env

mongoose.connect(process.env.DB_CONNECT_STRING);
let conectaDatabase = mongoose.connection;

export default conectaDatabase;
