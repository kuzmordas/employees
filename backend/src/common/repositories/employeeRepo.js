const Employees = require('../models/employee');

function list(query) {
  return Employees.find(query);
}

function findOne(query) {
  return Employees.findOne(query);
}

function remove(_id) {
  return Employees.deleteOne({_id});
}

function create(data) {
  return Employees.create(data);
}

module.exports = {
  list,
  findOne,
  remove,
  create
}