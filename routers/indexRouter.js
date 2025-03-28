const { Router } = require("express");
const indexRouter = Router();

// messages
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const links = [
    { href: "/", text: "home"},
    { href: "new", text: "post"},
];

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Message Board", messages: messages, links: links});
});
indexRouter.get("/new", (req, res) => {
    res.render("form", { header: "Post Message", links: links});
});
indexRouter.get("/:username", (req, res) => {
    const { username } = req.params;
    const message = messages.find(message => message.user === username);
    res.render("message", { message: message});
})
indexRouter.post("/new", (req, res) => {
    const name = req.body.username;
    const message = req.body.message;
    messages.push({ text: message, user: name, added: new Date() });
    res.redirect("/");
});

module.exports = indexRouter;