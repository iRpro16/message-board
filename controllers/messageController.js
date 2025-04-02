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

module.exports = {
    getMessages
}