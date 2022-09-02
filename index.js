const express = require('express');
const productsRouter = require("./routes/products");
const app = express();

app.use("/products", productsRouter);

app.listen(5000, () => console.log('Server started'));