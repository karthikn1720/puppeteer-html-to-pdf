import * as puppeteer from 'puppeteer';
import handlebars from 'handlebars'
import fs from 'fs'



const renderPdfDocument = <T>(templateName: string, data: T) => {

    const htmlData = fs.readFileSync(
        `${process.cwd()}/src/templates/${templateName}.html`, 'utf-8'
    );

    const template = handlebars.compile(htmlData)
    return template(data)
}


const generatePdf = async <T>(templateName: string, data: T) => {
    const browser = await puppeteer.launch({
        // headless: false
    });

    const html = renderPdfDocument(templateName, data)

    const page = await browser.newPage();
    await page.setContent(html, {
        waitUntil: 'domcontentloaded',
    });

    const pdf = await page.pdf({
        format: 'a4',
        printBackground: true,
        preferCSSPageSize: true,
        margin: {
            left: '40px',
            right: '40px',
            top: '40px',
            bottom: '40px',
        },
    });

    await page.close()
    await browser.close();

    return pdf;
}

export default {
    generatePdf
}