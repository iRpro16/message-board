const { Router } = require("express");
const { messages, links} = require('../data/messages');
const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.render("form", { header: "Post Message", links: links });
});
newRouter.post("/", (req, res) => {
    const name = req.body.username;
    const message = req.body.message;
    messages.push({ text: message, user: name, added: new Date() });
    res.redirect("/");
});

module.exports = newRouter;