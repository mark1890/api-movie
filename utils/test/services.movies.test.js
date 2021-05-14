const assert = require('assert')
const proxyquire = require('proxyquire')

const { MongoLibMock, getAllStub } = require('../mocks/mongoLib')
const { moviesMock } = require('../mocks/movies')

describe('services - movies', function () {
	const MoviesServices = proxyquire('../../services/movies.js', {
		'../lib/mongo.js': MongoLibMock
	})

	const moviesServices = new MoviesServices()

	describe('when getMovies method is called', async function () {
		it('should call the getAll MongoLib method', async function () {
			await moviesServices.getMovies({})
			assert.strictEqual(getAllStub.called, true)
		})

		it('should return an array of movies', async function () {
			const result = await moviesServices.getMovies({})
			const expected = moviesMock
			assert.deepStrictEqual(result, expected)
		})
	})
})