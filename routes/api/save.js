const router = require("express").Router();
const saveController = require("../../controllers/saveController");

// Matches with "/api/comments"
router
  .route("/:id")
  .post(saveController.findAndUpdate)

module.exports = router;
