/**
 * Barbearia do Kauan - Sistema de Agendamento WhatsApp
 * Arquivo Principal (Entry Point)
 */

const whatsAppService = require('./src/whatsapp');
const { setupExpress } = require('./src/express');
const { setupCronJobs } = require('./src/cron');
const { handleMessage } = require('./src/handlers/messageHandler');

async function bootstrap() {
    console.log("🚀 Iniciando sistema...");

    // 1. Inicializa Servidor Web
    setupExpress(whatsAppService);

    // 2. Inicializa Tarefas Agendadas
    setupCronJobs(whatsAppService);

    // 3. Handler de Mensagens
    whatsAppService.client.on('message', async (msg) => {
        try {
            await handleMessage(whatsAppService, msg);
        } catch (error) {
            console.error("Erro ao processar mensagem:", error);
        }
    });

    // 4. Conecta ao WhatsApp
    console.log("⏳ Aguardando conexão com o WhatsApp...");
    try {
        await whatsAppService.initialize();
        console.log("✅ Inicialização do WhatsApp concluída!");
    } catch (err) {
        console.error("❌ Falha crítica ao inicializar WhatsApp:", err);
    }
    
    console.log("✅ Inicialização do sistema concluída (Aguardando QR Code se necessário)");

    // Mantém o processo vivo indefinidamente
    setInterval(() => {
        // Log periódico para confirmar que o processo está vivo
        // console.log("💓 Heartbeat - Sistema ativo");
    }, 1000 * 60 * 5);
}

// Tratamento de erros não capturados para evitar queda do sistema
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});

bootstrap().then(() => {
    console.log("🚀 Bootstrap finalizado com sucesso!");
}).catch(err => {
    console.error("💥 Erro fatal no Bootstrap:", err);
    process.exit(1);
});
