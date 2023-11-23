import bcrypt from "bcrypt";
import db from "../database/db.js";

const createCustomer = (req, res) => {
  const {
    first_name,
    middle_name,
    last_name,
    email,
    age,
    password,
    birthdate,
  } = req.body;

  const saltRounds = process.env.SALT_ROUNDS;

  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        const result = await db.query(
          "INSERT INTO customers (first_name, middle_name, last_name, email, password, age, birthdate) VALUES ($1, $2, $3, $4, $5, $6)",
          [first_name, middle_name, last_name, email, hash, age, birthdate]
        );
        console.log(result); //store hash on DB
        res.sendStatus(200);
      }
    });
  });
};

const viewCustomer = async (req, res) => {
  const id = req.params.id;
  const result = await db.query("SELECT * FROM customer WHERE id=$1", [id]);
  console.log(result.rows[0]);
  res.sendStatus(200);
  db.end();
};
const editCustomer = (req, res) => {};
const deleteCustomer = (req, res) => {};

export { createCustomer, viewCustomer, editCustomer, deleteCustomer };
