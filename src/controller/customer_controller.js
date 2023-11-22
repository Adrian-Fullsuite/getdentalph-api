import bcrypt from "bcrypt";

const createCustomer = (req, res) => {
  const saltRounds = process.env.SALT_ROUNDS;
};
const viewCustomer = (req, res) => {
  res.send(req.params.id);
};
const editCustomer = (req, res) => {};
const deleteCustomer = (req, res) => {};

export { createCustomer, viewCustomer, editCustomer, deleteCustomer };
