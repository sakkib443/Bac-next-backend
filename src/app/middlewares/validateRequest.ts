/* eslint-disable @typescript-eslint/no-explicit-any */
// middlewares/validateRequest.ts

import { NextFunction, Request, Response } from 'express';
import { ZodSchema, ZodError } from 'zod';

const validateRequest = (schema: ZodSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const err: any = new Error('Validation error');
        err.status = 400;
        err.errors = error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message,
        }));
        return next(err);
      }

      const err: any = new Error('Something went wrong during validation');
      err.status = 500;
      return next(err);
    }
  };
};

export default validateRequest;
