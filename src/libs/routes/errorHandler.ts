import { IDisplay } from './../../config/IConfig';
export default function errorHandler(err, req, res, next) {
  const errorKey = (err && (err.errorCode)) || 'notFound';
  const errorStatus = (err && err.statusCode) || 500;
  const errMessage = {
    notFound: 'Not Found',
    unauthorized: 'You are not allowed to access this URL',
  };
  const errorMsg = err.message || err.error || errMessage[errorKey];
  const display: IDisplay = {
    error: errorMsg,
    message: 'error',
    status: errorStatus,
    timestamp: new Date(),
  };
  res.status(errorStatus).send(display);
}
