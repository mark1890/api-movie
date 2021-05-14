const express = require('express')
const app = express()

const { config } = require('./config/index')
const { moviesApi } = require('./routes/movies')

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandler')
const notFoundHandlder = require('./utils/middleware/notFoundHandler')

//Body parser
app.use(express.json())


moviesApi(app)
//Capturar error 404
app.use(notFoundHandlder)

//Los middlewares de error deben ir al final de las rutas / las rutas son middlewares
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)


app.listen(config.port, function () {
	console.log(`Listening http://localhost:${config.port}`)
})