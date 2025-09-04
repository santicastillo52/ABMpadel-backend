import type { Request, Response } from 'express';
export declare const getCourts: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getCourt: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createCourt: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCourt: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteCourt: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=court.controllers.d.ts.map