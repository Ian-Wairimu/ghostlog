import supertest from 'supertest';
import callback from "../pages/api/vercel/callback"

const api = supertest(callback);

test('notes are returned as json', async () => {
    await api
        .get("/vercel/callback")
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 100000)