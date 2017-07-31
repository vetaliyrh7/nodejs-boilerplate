import express from "express";
import userRouter  from "./user-router";

export default express.Router()
    .use('/users', userRouter)
;