<h1 align="center">Transactions Viewer (Client)</h1>

## 📋 Index

- [About](#-about)
- [Technologies](#-technologies)
- [Features](#-features)
- [How To Use](#-how-to-use)
- [Author](#-author)

# 🗃 About

**Transactions Viewer** is a Single Page Application that allows users to import CSV financial transactions files through an API endpoint and then exhibits all them in a table in the client side. Besides that, this web application also provides the possibility of filtering transactions by month/year and checking each transaction details.

The API is stored in a different repository, and you can check it on the link below:

https://github.com/cassiocappellari/transactions-viewer-v2-api

# 🤖 Technologies

## Front-end

- Vue.js
- JavaScript
- GraphQL
- Vue Apollo
- Vue Router
- V-mask

## Back-end

- Node.js
- TypeScript
- Prisma
- GraphQL
- GraphQL Tools
- Express GraphQL
- Express
- Multer
- Luxon

## Database

- PostgreSQL

# 🚀 Features

- 📃 List transactions
- 📆 Filter transactions by date range (YYYY/MM)
- 🔎 Verify transaction details
- 📦 Import transactions CSV files (API service)

You can test the features by sending the GraphQL Queries or HTTP Requests through the button bellow:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=transactions-viewer-app&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fcassiocappellari%2Ftransactions-viewer-app%2Fmaster%2Fserver%2Ftransaction-viewer-collection.json)

In order to use the import CSV files feature, the transactions table must have this 11 columns:

| id 	| account 	| description 	| category 	| reference 	| currency 	| amount 	| status 	| transactionDate 	| createdAt 	| updatedAt 	|
|:--:	|:-------:	|:-----------:	|:--------:	|:---------:	|:--------:	|:------:	|:------:	|:---------------:	|:---------:	|:---------:	|

# 🛠 How to Run

## 💻 Front-end

```bash
# Clone this repository

$ git clone https://github.com/cassiocappellari/transactions-viewer-v2-client

# Enter the project folder

$ cd transactions-viewer-v2-client

# Install the dependencies

$ npm install

# Start the project

$ npm run serve

# Access the app

http://localhost:8080

```

## 🗄 Back-end

To run the API, please access the other repository on the link below:

https://github.com/cassiocappellari/transactions-viewer-v2-api

# 👨‍🚀 Author

**Cássio Cappellari**

- GitHub: [@cassiocappellari](https://github.com/cassiocappellari)
- LinkedIn: [@cassiocappellari](https://www.linkedin.com/in/cassiocappellari/)
- Dev Community ([Basic Concepts of Node.js](https://dev.to/cassiocappellari/basic-concepts-of-node-js-pch) | [Fundamentals of REST API](https://dev.to/cassiocappellari/fundamentals-of-rest-api-2nag)): [@cassiocappellari](https://dev.to/cassiocappellari)

---

Developed with 🤍 by Cássio Cappellari!
