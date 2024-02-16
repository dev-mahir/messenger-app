import express from "express";

import tokenVerify from "../middlewares/verifyToken.js";
import { createChat, getAllChat } from "../controllers/chatController.js";

const router = express.Router();

router.use(tokenVerify)

// create route
router.route("/").post(createChat).get(getAllChat);

// export default router
export default router;
           