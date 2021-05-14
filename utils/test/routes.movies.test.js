const assert = require('assert').strict
const proxyquire = require('proxyquire')


const { moviesMock, MoviesServiceMock } = require('../mocks/movies')
const testServer = require('../testServer')

describe('routes - movies', function () {
	const route  =  () => proxyquire('../../routes/movies.js', {
		'../services/movies.js': MoviesServiceMock
	})
	
	const request = testServer(route)

	describe('GET /movies', function () {
		it('should response with status 200', function (done) {
			request.get('/api/movies').expect(200, done)
			done()
		})

		it('should respond with the list of movies', function (done) {
			request.get('/api/movies/').end((err, res) => {
				assert.deepStrictEqual(res.body, {
					data: moviesMock,
					message: 'Movies listed',
				})
			})
			done()
		})
	})
})