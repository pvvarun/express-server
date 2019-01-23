import { IDisplay } from './../../config/IConfig';
export default function errorHandler ( err,req,res,next ) {
  const errorKey = (err && err.error) || "notFound";
  const errMessage = {
    notFound: "Not Found",
    unauthorized: "You are not allowed to access this URL",
  };
  const display : IDisplay = {
    error: errMessage[errorKey],
    message: "error",
    status: 500,
    timestamp: new Date()
  }
  res.send(display);
}
