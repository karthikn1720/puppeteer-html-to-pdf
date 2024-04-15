import { RequestHandler } from "express"
import puppeteerService from "../services/puppeteer.service"

const generatePdf: RequestHandler = async (req, res) => {
    const { template, data } = req.body;
    const result = await puppeteerService.generatePdf(template, data)
    res.contentType('application/pdf').send(result)
}

export {
    generatePdf
}