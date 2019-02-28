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

        const compareHash = bcrypt.compareSync("123456", user.password_hash);
        expect(compareHash).toBe(true);
    });
});
