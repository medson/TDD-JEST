const { User } = require("../../src/app/models");

describe("", () => {
    it("should sum two numbers", async () => {
        // const user = await User.create({
        //     name: "Medson",
        //     email: "medson-1@gmail.com",
        //     password_hash: "123456"
        // });
        const user = await User.findAll({});
        console.log(user);

        // expect(user.email).toBe("medson-1@gmail.com");
    });

    it("should receive jwt token when authenticated with valid credentials", () => {});
});
