const router = require("express").Router();
const commentRoutes = require("./comments");

// Book routes
router.use("/comments", commentRoutes);

module.exports = router;
