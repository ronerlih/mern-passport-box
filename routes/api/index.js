const router = require("express").Router();
// const commentRoutes = require("./comments");
const uploadedRecosRoutes = require("./uploadedRecos");
const userRoutes = require("./user");

// comments routes
// router.use("/comments", commentRoutes);
router.use("/uploadRec", uploadedRecosRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;
