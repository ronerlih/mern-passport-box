const router = require("express").Router();
const recosController = require("../../controllers/recosController");

// Matches with "/api/comments"
router.route("/")
  .get(recosController.findAll)
  .post(recosController.create);

router
  .route("/:keywords")
  .get(recosController.findByKeywords)

// Matches with "/api/comments/:id"
// router
//   .route("/:id")
//   .get(recosController.findById)
//   .put(recosController.update)
//   .delete(recosController.remove);

module.exports = router;
