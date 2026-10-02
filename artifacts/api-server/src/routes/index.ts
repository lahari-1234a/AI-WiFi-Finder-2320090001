import { Router, type IRouter } from "express";
import healthRouter from "./health";
import wifiRouter from "./wifi";

const router: IRouter = Router();

router.use(healthRouter);
router.use(wifiRouter);

export default router;
