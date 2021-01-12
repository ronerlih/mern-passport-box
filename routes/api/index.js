const router = require("express").Router();
const recosRoutes = require("./recos");
const userRoutes = require("./user");

// comments routes
router.use("/uploadRec", recosRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;
