const express = require("express")
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express()
const cors = require('cors')
app.use(cors())

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://3wdz.c.time4vps.cloud:3000",
    changeOrigin: true,
  })
);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})