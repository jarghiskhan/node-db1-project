const db = require("../../data/db-config");
const { accounts } = require("../../data/seeds/02-accounts");

const getAll = () => {
  // DO YOUR MAGIC
  return db("accounts");
};

const getById = (id) => {
  // DO YOUR MAGIC
  return db("accounts").where({ id }).first();
};

const create = (account) => {
  // DO YOUR MAGIC
  return db("accounts")
    .insert(account)
    .then((ids) => {
      return getById(ids[0]);
    });
};

const updateById = (id, { name, budget }) => {
  // DO YOUR MAGIC
  return db("accounts")
    .where("id", id)
    .update({ name, budget })
    .then(() => {
      return getById(id);
    });
};

const deleteById = (id) => {
  // DO YOUR MAGIC
  return db("accounts")
  .where("id", id)
  .del()
  .then(()=>{
    getById(id)
  });
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
