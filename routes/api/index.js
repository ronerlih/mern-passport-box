const router = require("express").Router();
const recosRoutes = require("./recos");
const userRoutes = require("./user");
const imageRoutes = require("./image")
const saveRoutes = require("./save")

// comments routes
router.use("/uploadRec", recosRoutes);
router.use("/uploadImg", imageRoutes);
router.use("/savedRec", saveRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;
