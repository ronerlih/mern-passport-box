const router = require("express").Router();
const saveController = require("../../controllers/saveController");

router
  .route("/")
  .get(saveController.findByUser)
router
  .route("/:id")
  .post(saveController.findAndUpdate)

module.exports = router;
