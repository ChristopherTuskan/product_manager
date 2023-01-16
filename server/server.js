const express = require("express");
const cors = require("cors");
const app = express();
const productRoutes = require("./routes/product.routes");
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mongoose.config');
require('./routes/product.routes')(app);

app.listen(port, () => {
    console.log("Listening on port: ${port}")
});