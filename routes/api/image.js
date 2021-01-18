const router = require("express").Router();
const imageController = require("../../controllers/imgController");

// Matches with "/api/comments"
router.route("/")
//   .get(recosController.findAll)
  .post(imageController.create);

module.exports = router;