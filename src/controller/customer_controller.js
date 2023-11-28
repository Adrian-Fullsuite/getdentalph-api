import bcrypt from "bcrypt";
import db from "../database/db.js";
import { sanitizeInput, sanitizeObject } from "../utils/sanitize.js";
import checkAuthorization from "../utils/authorization.js";

const createCustomer = (req, res) => {
  const { first_name, middle_name, last_name, email_address, password } =
    req.body;

  const saltRounds = process.env.SALT_ROUNDS;

  try {
    //encrypting process
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          throw new Error(err);
        } else {
          const result = db.query(
            "INSERT INTO customer (first_name, middle_name, last_name, email_address, password) VALUES ($1, $2, $3, $4, $5)",
            [first_name, middle_name, last_name, email_address, hash]
          );

          result
            .then((response) => {
              res.sendStatus(200);
            })
            .catch((error) => {
              console.error(error);
              res.sendStatus(500);
            });
        }
      });
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const viewCustomer = async (req, res) => {
  if (checkAuthorization(req.headers)) {
    const { id } = req.params;
    const { rows } = await db.query(
      "SELECT * FROM customer WHERE customer_id=$1",
      [id]
    );
    if (sanitizeObject(rows[0])) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(401);
  }
};

const editCustomer = async (req, res) => {
  if (checkAuthorization(req.headers)) {
    //destructure object and takes specifics key value pairs
    const { first_name, middle_name, last_name, id } = req.body;

    // updates the customer table where customer_id = id
    const result = db.query(
      "UPDATE customer SET first_name=$1, middle_name=$2, last_name=$3  WHERE customer_id=$4",
      [first_name, middle_name, last_name, 9999]
    );
    result
      .then((response) => {
        const { rowCount } = response;
        rowCount > 0 ? res.sendStatus(200) : res.sendStatus(500);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(401);
  }
};

const deleteCustomer = (req, res) => {
  if (checkAuthorization(req.headers)) {
    const { id } = req.params;

    const result = db.query("DELETE FROM customer WHERE customer_id=$1", [id]);

    result
      .then((response) => {
        const { rowCount } = response;
        rowCount > 0 ? res.sendStatus(200) : res.sendStatus(500);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
  } else {
    res, sendStatus(401);
  }
};

export { createCustomer, viewCustomer, editCustomer, deleteCustomer };
