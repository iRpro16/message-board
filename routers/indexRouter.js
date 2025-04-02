const { Router } = require("express");
const indexRouter = Router();
const messageController = require("../controllers/messageController");

indexRouter.get("/", messageController.getMessages);
indexRouter.get("/display/:username", messageController.displayUserGet);

module.exports = indexRouter;