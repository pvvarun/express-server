import { NextFunction, Request, Response } from 'express';

export default (config: any) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log('req---', req.body);
    Object.keys(config).forEach((key) => {
      const property = { ...config[key] };
      if (!property) {
        const errMessage = `Missing validation for ${key}`;
        throw ({ error: errMessage, statusCode: 404 });
      }

      if (!property.in) {
        const errMessage = (`${key} is not required`);
        throw ({ error: errMessage, statusCode: 404 });
      }

      property.in.forEach((inside) => {
        const value = req[inside][key];
        let errMessage: string  = property.errorMessage;
        if (property.required && !value) {
          errMessage = (`${key} is missing-------`);
          throw ({ error: errMessage, statusCode: 404 });
        }

        if (property.string && typeof (value) !== 'string') {
          errMessage = `${key} is provided as ${typeof (value)} but required as ${property.type}`;
          throw ({ error: errMessage, statusCode: 402 });
        }

        if (property.isObject && (Object.keys(value).length === 0)) {
          errMessage = (`${typeof (value)} is empty`);
          throw ({ error: errMessage, statusCode: 402 });
        }

        if (!property.required && isNaN(value) && typeof (value) !== 'undefined') {
          errMessage = property.errorMessage;
          throw ({ error: errMessage, statusCode: 402 });
        }

        const regex1 = RegExp(property.regex);
        if (!(regex1.test(value))) {
          errMessage = `Invalid characters `;
          throw ({ error: errMessage, statusCode: 402 });
        }
        if (property.custom) {
          const resp = property.custom(value);
          if (!resp) {
            throw ({ error: 'Validation failed for custom function', statusCode: 402 });
          }
        }

      });
    });
    next();
  };
