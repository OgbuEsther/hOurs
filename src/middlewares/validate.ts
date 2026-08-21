import type { Request, Response, NextFunction } from "express";

export const validateUser =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    // result.error.issues[0].message
    if (!result.success) {
      return res.status(400).json({
        message: result.error || "VALIDATION FAILED!",
      });
    }
    next();
  };
