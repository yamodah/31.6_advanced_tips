const router = require("express").Router();
const controller = require("./notes.controller");

router.route("/:noteId/ratings/:ratingId").get(controller.read).all(controller.methodNotAllowed)
router.route("/:noteId/ratings").get(controller.list).all(controller.methodNotAllowed)
router
  .route("/:noteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete).all(controller.methodNotAllowed);

router.route("/").get(controller.list).post(controller.create).all(controller.methodNotAllowed);

module.exports = router;
