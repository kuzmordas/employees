const repo = require('./../../common/repositories/employeeRepo');

async function create (req, res) {
  const { body } = req;
  const newEmployee = await repo.create(body);
  return res.send(newEmployee);
}

async function list (req, res) {
  const { query } = req;
  if (query.name) query.name = {$regex: query.name, $options: '$i'}
  const employees = await repo.list(query);
  return res.send(employees);
}

async function remove (req, res) {
  const { id } = req.params;
  await repo.remove(id);
  return res.send({});
}

module.exports = {
  create,
  list,
  remove
}