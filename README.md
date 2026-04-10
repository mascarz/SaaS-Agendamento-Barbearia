# 💈 Sistema de Agendamento para Barbearia via WhatsApp

Um sistema completo de agendamento automatizado para barbearias, utilizando a API do WhatsApp para facilitar a comunicação com os clientes e otimizar o gerenciamento de horários.

## 🚀 Funcionalidades

- **🤖 Atendimento Automático**: Bot que interage com o cliente, apresenta serviços, profissionais e horários disponíveis.
- **📅 Agendamento Inteligente**: Cálculo automático de slots de tempo baseados na duração de cada serviço.
- **🔔 Notificações em Tempo Real**: Alertas automáticos para o administrador sobre novos agendamentos, confirmações e cancelamentos.
- **🙋‍♂️ Transição para Humano**: Opção para o cliente solicitar atendimento humano, desativando temporariamente a IA.
- **💻 Painel Administrativo**: Interface web para gerenciar agendamentos, profissionais e serviços (em desenvolvimento).
- **🏆 Sistema de Fidelidade**: Controle de pontos para premiar clientes frequentes.
- **⏰ Lembretes Automáticos**: Tarefas agendadas (cron jobs) para enviar lembretes aos clientes.

## 🛠️ Tecnologias Utilizadas

- **Backend**: [Node.js](https://nodejs.org/) com [Express](https://expressjs.com/)
- **WhatsApp**: [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) (biblioteca que simula o WhatsApp Web)
- **IA/NLP**: [OpenAI API](https://openai.com/) (para processamento de linguagem natural e automação)
- **Agendamento de Tarefas**: [node-cron](https://www.npmjs.com/package/node-cron)
- **Banco de Dados**: Arquivos JSON locais (simples e eficiente para pequenos e médios negócios)
- **Frontend**: HTML5, CSS3 e JavaScript (para o painel de administração)

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/) (v16 ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Um celular com WhatsApp para escanear o QR Code

## 🔧 Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/saas-agendamento-barbearia.git
   cd saas-agendamento-barbearia
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis:**
   Abra o arquivo `src/config.js` e ajuste as configurações conforme sua necessidade:
   - `NUMERO_ADMIN`: Seu número de WhatsApp (com DDI e DDD).
   - `WEB_PORT`: Porta onde o servidor web será executado (padrão 3000).
   - `ENDERECO_BARBEARIA` e `HORARIO_FUNCIONAMENTO`.

4. **Inicie o sistema:**
   ```bash
   node index.js
   ```

5. **Conecte o WhatsApp:**
   Um QR Code aparecerá no terminal. Escaneie-o com o WhatsApp do seu negócio.

## 📂 Estrutura do Projeto

```text
├── public/              # Arquivos estáticos (HTML, CSS, JS do painel)
├── src/
│   ├── handlers/        # Lógica de tratamento de mensagens e comandos
│   ├── config.js        # Configurações globais do sistema
│   ├── database.js      # Funções de leitura/escrita nos arquivos JSON
│   ├── whatsapp.js      # Configuração e inicialização do cliente WhatsApp
│   └── ...              # Outros módulos (express, cron, utils)
├── data/                # Arquivos JSON onde os dados são persistidos
├── index.js             # Ponto de entrada da aplicação
└── package.json         # Gerenciamento de dependências
```

## 📝 Licença

Este projeto está sob a licença ISC.

---
Desenvolvido com ❤️ para facilitar a vida de barbeiros e clientes.
