const db = require("../data/queries");
const links = [
    { href: "/", text: "home"},
    { href: "/new", text: "post"},
];

async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    console.log(messages)
    res.render("index", {
        title: "Mini message board",
        messages: messages,
        links: links
    })
}

async function displayUserGet(req, res) {
    const messages = await db.getAllMessages();
    const { username } = req.params;
    const message = messages.find(message => message.username === username);
    res.render("message", { message: message });
}

async function displayFormGet(req, res) {
    res.render("form", {
        header: "Post Message",
        links: links
    })
}

async function displayFormPost(req, res) {
    await db.insertUser(req.body.username, req.body.message, new Date());
    res.redirect("/");
}

module.exports = {
    getMessages,
    displayUserGet,
    displayFormGet,
    displayFormPost
}