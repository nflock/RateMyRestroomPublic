import app from './server'
const supertest = require('supertest')
const request = supertest(app) 

test('Check that user is being created', async() => {
    const user = {
        username: "tests",
        password: "testing"
    };
  
    try {
        const response = await request(app).post('/api/register').send(user)
        expect(response.statusCode).toBe(200)
    }  catch (err) {

        console.log('Error')
    }
  });