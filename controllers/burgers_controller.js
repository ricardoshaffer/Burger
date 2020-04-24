let express = require("express");
let router = express.Router();

let burger = require("../models/burger");

//===============//
// display burgers/
//===============//
router.get("/", function(req, res) {
    burger.all(function(data) {
      let hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
//===============//
// add new burger//
//===============//

  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
//===============//
//update burger  //
//===============//
router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  //===============//
  //trash burger   //
  //===============//
  router.delete("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  module.exports = router;
  