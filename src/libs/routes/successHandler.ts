import { NextFunction, Request, Response, Router } from 'express';
export default function successHandler(message: string, datas) {
  return {
    data: datas || {
      id: 2444,
      maritalStatus: 'Unmarried',
      name: 'Varun',
    },
    message: message || 'no message',
  };
}
