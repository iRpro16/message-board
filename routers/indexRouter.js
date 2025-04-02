const { Router } = require("express");
const indexRouter = Router();
const messageController = require("../controllers/messageController");

indexRouter.get("/", messageController.getMessages);
indexRouter.get("/display/:username", (req, res) => {
    const { username } = req.params;
    const message = messages.find(message => message.user === username);
    res.render("message", { message: message});
});

module.exports = indexRouter;