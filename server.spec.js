const supertest = require('supertest')
const server = require('./server')

test('server.js', async () => { 
    const request = supertest(server)
    const res= await request.get('/')
    expect(res.status).toBe(200)
})





