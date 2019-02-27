const request = require("supertest");

const app = require("../../src/app");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("Authentication", () => {
    beforeEach(async () => {
        await truncate();
    });

    it("should receive jwt token when authenticated with valid credentials", async () => {
        const user = await User.create({
            name: "Medson",
            email: "medson11@gmail.com",
            password_hash: "123456"
        });

        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: "12345126"
            });

        expect(response.status).toBe(200);
    });
});
