const supertest = require('supertest')
const server = require('../server')
const db = require('../data/db-config')
const Stories = require('./stories-model')


describe('Stories Router', () => {
    beforeEach(async () => {
        await db('stories').truncate()
    })

    // get /
    describe('Get all the stories', () => {

        it('should return a status code of 200', async () => {
            const expectedCode = 200
            const request = supertest(server)
            const response = await request.get('/api/stories')
            expect(response.statusCode).toBe(expectedCode)

        })
        })
        })
        


