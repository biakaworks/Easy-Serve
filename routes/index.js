const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");
const connection = require("./api/connection");

router.use("/data", connection);
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
