const router = require("express").Router();
const controller = require("./ratings-controller");

router.route("/:ratingId").get(controller.read).all(controller.methodNotAllowed)
router.route("/").get(controller.list).all(controller.methodNotAllowed)

module.exports = router;