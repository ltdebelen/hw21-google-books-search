const expres = require("express");
const router = expres.Router();
const booksController = require("../controllers/booksController");

router.post("/api/books", (req, res) => {
  booksController.create(req, res);
});

router.get("/api/books", (req, res) => {
  booksController.findAll(req, res);
});

router.delete("/api/books/:id", (req, res) => {
  booksController.remove(req, res);
});

module.exports = router;
