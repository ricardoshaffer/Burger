let orm = require("../config/orm");
//===============//
//get all burgers//
//===============//
let burger = {
    all: callback => {
      orm.selectAll("burgers", (response) => {
        callback(response);
      });
    },
//===============//
// new burger    //
//===============//
    create: (cols, vals, callback) => {
      orm.insertOne("burgers", cols, vals, (response) => {
        callback(response);
      });
    },
//===============//
// update eaten  //
//===============//
    update: (objColVals, condition, callback) => {
      orm.updateOne("burgers", objColVals, condition, (response) => {
        callback(response);
      });
    },
//===============//
// trash burger  //
//===============//
    delete: (objColVals, condition, callback) => {
        orm.deleteOne("burgers", objColVals, condition, (response) => {
          callback(response);
        });
      }
  };
  module.exports = burger;