
// ========================== UNIT TEST ========================== \\

const supertest = require("supertest");
const server = supertest.agent("http://localhost:8080");

// UNIT test begin

describe('Result of occupancy', () => {

	it('should return wishes', (done) => {

		server
			.get('/api/occupancy?sensor=room1')
			.set('Accept', 'application/json')
			.expect(200,
				{
					"inside": 5
				}
				, done);

	});

	it('should return wishes', (done) => {

		server
			.get('/api/occupancy?sensor=room2')
			.set('Accept', 'application/json')
			.expect(200,
				{
					"inside": 11
				}
				, done);

	});

	it('should return wishes', (done) => {

		server
			.get('/api/occupancy?sensor=room3')
			.set('Accept', 'application/json')
			.expect(200,
				{
					"inside": 43
				}
				, done);

	});

});
