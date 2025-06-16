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
 ┃ ┃ ┗ 📄translation.json        ← Translations for English
 ┃ ┗ 📁pt
 ┃   ┗ 📄translation.json        ← Translations for Portuguese
 ┣ 📁node_modules                ← Dependencies
 ┣ 📁src
 ┃ ┣ 📁app
 ┃ ┃ ┣ 📄index.ts                ← Application entry point (sets up routes/middleware)
 ┃ ┃ ┣ 📄routes.ts               ← API route definitions
 ┃ ┃ ┗ 📄types.ts                ← Shared types, e.g., LocaleConfig
 ┃ ┣ 📁config
 ┃ ┃ ┗ 📄localization.ts         ← Localization by country/IP (timezone, currency, date, etc.)
 ┃ ┣ 📁controller
 ┃ ┃ ┗ 📄controller.ts           ← Returns formatted data via middleware
 ┃ ┣ 📁dtos
 ┃ ┃ ┗ 📄dtos.ts                 ← Sample data to be formatted (e.g., balance, transactions)
 ┃ ┣ 📁exceptions
 ┃ ┃ ┗ 📄userExceptions.ts       ← Custom exceptions (not directly related to i18n)
 ┃ ┣ 📁middleware
 ┃ ┃ ┣ 📄i18n.ts                 ← i18next middleware (text translations)
 ┃ ┃ ┗ 📄localization.ts         ← Middleware to apply number/date/currency formatting
 ┃ ┗ 📄server.ts                 ← Initializes server and applies middlewares
 ┣ 📄.env                        ← Environment variables
 ┣ 📄package.json               ← Dependencies and scripts
 ┣ 📄tsconfig.json              ← TypeScript configuration
 ┗ 📄yarn.lock / package-lock.json ← Dependency lockfile

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