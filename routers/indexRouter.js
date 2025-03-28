const { Router } = require("express");
const indexRouter = Router();
const { messages, links} = require('../data/messages');

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Message Board", messages: messages, links: links});
});
indexRouter.get("/display/:username", (req, res) => {
    const { username } = req.params;
    const message = messages.find(message => message.user === username);
    res.render("message", { message: message});
});

module.exports = indexRouter;