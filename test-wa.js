const { Client, NoAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

console.log("🚀 Iniciando teste simples (NoAuth)...");

const client = new Client({
    authStrategy: new NoAuth(),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu'
        ]
    }
});

client.on('qr', (qr) => {
    console.log("📲 QR CODE RECEBIDO:");
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log("✅ CLIENTE PRONTO!");
});

console.log("⏳ Inicializando...");
client.initialize().catch(err => console.error("❌ ERRO:", err));

setTimeout(() => {
    console.log("⏱ Teste finalizado por timeout (60s)");
    process.exit(0);
}, 60000);
