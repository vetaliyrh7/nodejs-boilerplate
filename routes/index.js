import express from "express";
import v1 from "./v1";

export default express.Router()
    .use('/v1', v1)
;