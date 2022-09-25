const db = require("../models");
const Idea = db.idea;
const Op = db.Sequelize.Op;

//Create and Save a new idea
exports.create = (req, res) => {
  //Validate request
  console.log(req.body)
  if(!req.body.title){
    res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
  }

  //Create a idea
  const idea = {
    title: req.body.title,
    description:req.body.description
  }

  //Save idea in the database
  Idea.create(idea)
  .then(data =>{
    res.send(data);
  })
  .catch(err =>{
    res.status(500).send({
        message:
        err.message ||  "Some error ocurred while creating the idea"
    })
  })
};

//Retrieve all ideas from the database
exports.findAll = (req, res) => {
    Idea.findAll()
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error ocurred while retrieving ideas"
        })
    })
};

//Find a single idea with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Idea.findByPk(id)
    .then(data => {
      console.log(id)
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Idea with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Idea with id=" + id
      });
    });
};

//Update a idea by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Idea.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Idea was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Idea with id=${id}. Maybe Idea was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Idea with id=" + id
      });
    });
};

//Delete a idea by the id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Idea.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Idea was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Idea with id=${id}. Maybe Idea was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Idea with id=" + id
      });
    });
};
