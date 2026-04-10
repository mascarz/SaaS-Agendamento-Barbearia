const puppeteer = require('puppeteer');

(async () => {
    try {
        console.log("🚀 Tentando iniciar Puppeteer...");
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        console.log("✅ Puppeteer iniciado com sucesso!");
        await browser.close();
        process.exit(0);
    } catch (e) {
        console.error("❌ Erro ao iniciar Puppeteer:", e.message);
        process.exit(1);
    }
})();
