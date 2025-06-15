# 🌍 Internacionalization Node API

A Node.js + TypeScript-based API that supports **internationalization (i18n)** and **localization (l10n)** of numeric, date, and currency values. It also supports multilingual translations via `i18next`, and automatically formats responses based on the user's IP or preferences.

## 🚀 Features

- 🌐 Automatic locale detection based on IP
- 🔢 Smart formatting for numbers, currency, and dates
- 🧠 Middleware to recursively localize all numeric and date fields
- 📘 Translation support (`i18next`) with `pt` and `en` locales
- ⚙️ Centralized locale configuration per country
- 📦 DTO layer to handle structured data
- ⚡ Fast and lightweight using Express and TypeScript

---

## 📁 Project Structure
📦internacionalization-node
 ┣ 📁locales
 ┃ ┣ 📁en
 ┃ ┃ ┗ 📄translation.json        ← Traduções para inglês
 ┃ ┗ 📁pt
 ┃   ┗ 📄translation.json        ← Traduções para português
 ┣ 📁node_modules                ← Dependências
 ┣ 📁src
 ┃ ┣ 📁app
 ┃ ┃ ┣ 📄index.ts                ← Ponto de entrada da aplicação (configura rotas/middleware)
 ┃ ┃ ┣ 📄routes.ts               ← Definição de rotas da API
 ┃ ┃ ┗ 📄types.ts                ← Tipos compartilhados, ex: LocaleConfig
 ┃ ┣ 📁config
 ┃ ┃ ┗ 📄localization.ts         ← Localização por país/IP (timezone, moeda, data, etc.)
 ┃ ┣ 📁controller
 ┃ ┃ ┗ 📄controller.ts           ← Retorna dados brutos formatados via middleware
 ┃ ┣ 📁dtos
 ┃ ┃ ┗ 📄dtos.ts                 ← Dados de exemplo a serem formatados (ex: balance, transactions)
 ┃ ┣ 📁exceptions
 ┃ ┃ ┗ 📄userExceptions.ts       ← Exceções personalizadas (não relacionado diretamente à i18n)
 ┃ ┣ 📁middleware
 ┃ ┃ ┣ 📄i18n.ts                 ← Middleware i18next (traduções de texto)
 ┃ ┃ ┗ 📄localization.ts         ← Middleware para aplicar formatação de números/datas/moeda
 ┃ ┗ 📄server.ts                 ← Inicializa servidor e aplica middlewares
 ┣ 📄.env                        ← Variáveis de ambiente
 ┣ 📄Dockerfile                  ← Docker (opcional)
 ┣ 📄docker-compose.yaml        ← Docker Compose (opcional)
 ┣ 📄package.json               ← Dependências e scripts
 ┣ 📄tsconfig.json              ← Configuração TypeScript
 ┗ 📄yarn.lock / package-lock.json ← Lockfile de dependências

 ---

## 🛠️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/IsraelMatusse/DONNATIONS-APP-FRONT.git
cd internacionalization-node

2. Install Dependencies
yarn
3. Run the Application
yarn dev
The server will start on: http://localhost:3002

🧪 Sample Endpoints
	•	GET /users → Returns a user with localized numbers and dates
	•	GET /products → Returns product data with formatting applied
	•	Response format adapts based on your IP (or can be manually injected via mock IP)

🌍 Adding New Locales

To add support for a new country:
	1.	Update src/config/localization.ts:

FR: {
  country: "France",
  language: "fr",
  currency: "EUR",
  dateFormat: "DD/MM/YYYY",
  timeFormat: "24h",
  decimalSeparator: ",",
  timezone: "Europe/Paris",
}

✅ Requirements
	•	Node.js 18+
	•	Yarn
	•	Internet connection (for geo-IP resolution)

Made by Israel Matusse – feel free to reach out!