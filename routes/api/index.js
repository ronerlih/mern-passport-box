const router = require("express").Router();
const recosRoutes = require("./recos");
const userRoutes = require("./user");
const imageRoutes = require("./image")

// comments routes
router.use("/uploadRec", recosRoutes);
router.use("/uploadImg", imageRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;
