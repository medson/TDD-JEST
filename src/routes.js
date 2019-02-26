const routes = require("express").Router();
const { User } = require("./app/models");

/**
 * routes
 */
routes.get("/users", async (req, res) => {
    // const user = await User.create({
    //     name: "meds",
    //     email: "med2@gmail.com",
    //     password_hash: "pass"
    // });
    res.send(await User.findAll({ name: "meds" }));
});
module.exports = routes;
