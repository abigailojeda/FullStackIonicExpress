
module.exports = app => {
    const idea = require("../controllers/idea.controller");
  
    var router = require("express").Router();
  
    // Create a new idea
    router.post("/", idea.create);
  
    // Retrieve all idea
    router.get("/", idea.findAll);
  
    // Retrieve a single idea with id
    router.get("/:id", idea.findOne);
  
    // Update a idea with id
    router.put("/:id", idea.update);
  
    // Delete a idea with id
    router.delete("/:id", idea.delete);
  
    app.use("/api/idea", router);
  }
  