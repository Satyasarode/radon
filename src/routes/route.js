const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

//router.get("/getBooksData", BookController.getBooksData)

router.post("/bookList", BookController.bookList  )
router.get("/bookList", BookController.bookList  )

router.post("/randomBooks", BookController.randomBooks  )
router.get("/randomBooks", BookController.randomBooks  )

router.post("/particularBooks", BookController.particularBooks  )
router.get("/particularBooks", BookController.particularBooks  )

router.post("/yearDetails", BookController.yearDetails  )
router.get("/yearDetails", BookController.yearDetails  )

router.post("/priceDetails", BookController.priceDetails )
router.get("/priceDetails", BookController.priceDetails )

module.exports = router;