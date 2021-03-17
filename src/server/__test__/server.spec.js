const app = require('./../index')
const supertest = require('supertest')
const request = supertest(app)

import 'babel-polyfill'

it('Testing the root endpoint', async done => {
    const res = await request.get('/')

    expect(res.status).toBe(200)
    done()
})