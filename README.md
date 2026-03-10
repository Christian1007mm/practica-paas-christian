# Práctica PaaS – Heroku (Node.js)

Esta app mínima sirve un `index.html` como estático usando Express.

## Archivos
- `package.json`: define `start` para que Heroku arranque con `node server.js`.
- `server.js`: servidor Express que sirve archivos estáticos.

## Uso local
```bash
npm install express
node server.js
```

Abre `http://localhost:3000`.

## Despliegue en Heroku
Conecta el repo a Heroku y usa *Deploy Branch*.
