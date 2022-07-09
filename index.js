const
    express = require('express'),
    serveStatic = require('serve-static'),
    history = require('connect-history-api-fallback'),
    port = process.env.PORT || 5000,
    dotenv = require("dotenv");

dotenv.config()


const app = express()

app.use(history())
app.use(serveStatic(__dirname + '/dist'))
app.listen(port)