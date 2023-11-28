import db from "../database/db.js";
import bcrypt from "bcrypt";
import { encodeToken } from "../utils/token.js";

const customerAuth = (req, res) => {
  const { email, password } = req.body;

  const result = db.query(
    "SELECT password FROM customer WHERE email_address = $1",
    [email]
  );

  result.then((response) => {
    const { rows } = response;

    if (rows.length === 0) {
      res.sendStatus(500);
      return;
    }

    try {
      bcrypt.compare(password, rows[0].password, (err, isPasswordTrue) => {
        let token;
        isPasswordTrue ? (token = encodeToken("id", 1)) : res.sendStatus(500);
        res.send(token);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
};

const dentistAuth = (req, res) => {
  const { email, password } = req.body;

  const result = db.query(
    "SELECT password FROM dentist WHERE email_address = $1",
    [email]
  );

  result.then((response) => {
    const { rows } = response;

    if (rows.length === 0) {
      res.sendStatus(500);
      return;
    }

    try {
      bcrypt.compare(password, rows[0].password, (err, isPasswordTrue) => {
        let token;
        isPasswordTrue ? (token = encodeToken("id", 1)) : res.sendStatus(500);
        res.send(token);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
};

export { customerAuth, dentistAuth };
