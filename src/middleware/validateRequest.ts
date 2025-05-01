import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';
import { AppError } from './errorHandler';

export const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof Error) {
        return next(new AppError(400, error.message));
      }
      return next(new AppError(400, 'Invalid request'));
    }
  };
}; 