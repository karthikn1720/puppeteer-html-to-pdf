import { Router } from "express";
import { generatePdf } from "../controllers/puppeteer.controller";

const router = Router()

router.route('/pdf').post(generatePdf)

export default router;