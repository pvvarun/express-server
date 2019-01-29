import {Request, Response, NextFunction} from 'express';

export default function validateHandler(config:any) {
  return function(req:Request, res:Response, next:NextFunction) {
    console.log("inside validateHandler");
    Object.keys(config).forEach((key) => {
      const property = { ... config[key] };
      if(!property) {
        const errMessage = `Missing validation for ${key}`;
        throw({ error : errMessage, statusCode:404});
      }

      if(!property.in) {
        const errMessage = (`${key} is not required`);
        throw({ error : errMessage, statusCode:404});
      }

      property.in.forEach((inside) => {
        const value = req[inside][key];
        const errMessage = property.errorMessage;
        if(property.required&&!value) {
          const errMessage = (`${key} is missing`);
          throw({ error : errMessage, statusCode:404});
        }

        if(property.string && typeof(value) != 'string') {
          const errMessage = `${key} is provided as ${typeof(value)} but required as ${property.type}`;
          throw({ error : errMessage, statusCode:402});
        }

        if(property.isObject &&  (Object.keys(value).length == 0)) {
          const errMessage = (`${typeof(value) } is empty`);
          throw({ error : errMessage, statusCode:402});
        }

        if(!property.required && isNaN(value) && typeof(value) != 'undefined' ) {
          errMessage : property.errorMessage;
          throw ({error:errMessage, statusCode:402});
        }

        const regex1 = RegExp(property.regex);
        if(!(regex1.test(value))) {
          const errMessage = `Inavalid characters `;
          throw ({error:errMessage, statusCode:402});
        }

        if( property.custom ) {
          property.custom ( value );
        }

      });
    });
    next();
  }
}
