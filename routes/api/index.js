const router = require("express").Router();
const recosRoutes = require("./recos");
const userRoutes = require("./user");

// comments routes
router.use("/recos", recosRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;
