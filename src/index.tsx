import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from "miragejs";
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Website 1",
          type: "deposit",
          category: "website",
          amount: 6000,
          createdAt: new Date("2021-02-02 09:00:00")
        },
        {
          id: 2,
          title: "Conta de energia",
          type: "withdraw",
          category: "casa",
          amount: 60,
          createdAt: new Date("2021-02-12 10:00:00")
        },
        {
          id: 3,
          title: "Conta de água",
          type: "withdraw",
          category: "casa",
          amount: 80,
          createdAt: new Date("2021-02-20 12:30:00")
        },
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", {
        ...data,
        createdAt: new Date(),
      });
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);