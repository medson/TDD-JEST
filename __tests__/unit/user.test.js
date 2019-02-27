const { User } = require("../../src/app/models");
const bcrypt = require("bcryptjs");
const truncate = require("../utils/truncate");

describe("User", () => {
    beforeEach(async () => {
        await truncate();
    });

    it("should encrypt user password", async () => {
        const user = await User.create({
            name: "Medson",
            email: "medson11@gmail.com",
            password: "123456"
        });

        const hash = await bcrypt.hash("123456", 8);
        expect(user.password_hash).toBe(hash);
    });
});
