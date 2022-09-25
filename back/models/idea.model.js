
module.exports = (sequelize, Sequelize) => {
    const Idea = sequelize.define("idea", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return Idea;
  }
  