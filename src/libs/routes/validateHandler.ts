import {Request, Response, NextFunction} from 'express';

export default function validateHandler(config:any) {
  return function(req:Request, res:Response, next:NextFunction) {
    console.log("inside validateHandler");

    next();
  }
}
