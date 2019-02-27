class SessionController {
    async store(req, res) {
        res.status(200).send("okoko");
    }
}

module.exports = new SessionController();
