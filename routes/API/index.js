const router = require("express").Router();
const articlesRoutes = require("./articles");

// Book routes
router.use("/articles", articleRoutes);

module.exports = router;
