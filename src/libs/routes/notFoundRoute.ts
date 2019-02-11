import { NextFunction, Request, Response } from 'express';
export default function notFoundRoutes( req: Request, res: Response, next: NextFunction ) {
  console.log(' inside not found Route');
  next ({ error: 'notFound', statusCode: 404 });
}
