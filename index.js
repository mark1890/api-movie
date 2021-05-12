const express = require('express')

const app = express()

const { config } = require('./config/index')

app.get('/', function (req, res) {
	res.send('Hello world')
})

app.get('/json', function (req, res) {
	res.json({hello: 'world'})
})

app.get('/:name', function (req, res) {
	const year = req.params.name
	if ((year % 4 == 0 && (year % 100 != 0)) || (year % 400 == 0)) {
		res.send('Este año es bisiesto: ' + year)
	} else {
		res.send('Este año no es bisiesto: ' + year)
	}
})

app.listen(config.port, function () {
	console.log(`Listening http://localhost:${config.port}`)
})