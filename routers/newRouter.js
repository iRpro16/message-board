const { Router } = require("express");
const newRouter = Router();
const messageController = require("../controllers/messageController");

newRouter.get("/", messageController.displayFormGet);
newRouter.post("/", messageController.displayFormPost);

module.exports = newRouter;