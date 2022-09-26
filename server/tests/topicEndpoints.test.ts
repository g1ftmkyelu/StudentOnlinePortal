import request from "supertest"
import { config } from 'dotenv'
config({ path: `.env`})

const baseUrl = process.env.BASEURL
const token=process.env.TOKEN

describe('topic endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.get('/topic')
            .set('Authorization', `Bearer ${token}`)
	expect(response.statusCode).toBe(200)
	})
})