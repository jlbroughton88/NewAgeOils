<!-- handle requests and call on the corresponding route from controllers -->

const router = express.Router();
const mongoose = require("mongoose");

const MODEL = require("../models/MODEL.js")

import CONTROLLER from "../controllers/childFile"

router.get("/", CONTROLLER.CONTROLLER_EXPORT);

module.exports = router;