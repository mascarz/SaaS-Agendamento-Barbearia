const puppeteer = require('puppeteer');

(async () => {
    try {
        console.log("🚀 Tentando iniciar Puppeteer puro...");
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
        });
        console.log("✅ Puppeteer iniciado com sucesso!");
        const page = await browser.newPage();
        await page.goto('https://google.com');
        console.log("✅ Navegou para Google!");
        await browser.close();
        console.log("✅ Browser fechado!");
        process.exit(0);
    } catch (e) {
        console.error("❌ ERRO NO PUPPETEER:", e);
        process.exit(1);
    }
})();
