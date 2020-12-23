const router = require("express").Router();
const commentRoutes = require("./comments");
const userRoutes = require("./user");

// comments routes
router.use("/comments", commentRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;
