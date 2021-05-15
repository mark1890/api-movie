const assert = require('assert')
const { describe } = require('mocha')
const buildMessage = require('../buildMessage')


describe.only('utils - buildMessage', () => {
	describe('when receives an entity and an action', function () {
		it('should return respective message', function () {
			const result = buildMessage('movie', 'create')
			const expected = 'movie created'
			assert.strictEqual(result, expected)
		})
	})

	describe('when receives an entity and an actiopn and is a list', function () {
		it('should return the respective message with the entity in plural', function () {
			const result = buildMessage('movie', 'list')
			const expected = 'movies listed'
			assert.strictEqual(result, expected)
		})
	})
})
