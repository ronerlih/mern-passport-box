const router = require("express").Router();
const uploadedRecController = require("../../controllers/recoController");

// Matches with "/api/comments"
router.route("/")
  .get(uploadedRecController.findAll)
  .post(uploadedRecController.create);

// Matches with "/api/comments/:id"
router
  .route("/:id")
  .get(uploadedRecController.findById)
  .put(uploadedRecController.update)
  .delete(uploadedRecController.remove);

module.exports = router;