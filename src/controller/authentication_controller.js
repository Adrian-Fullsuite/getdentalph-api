import jwt from "jsonwebtoken";
import db from "../database/db.js";
import bcrypt from "bcrypt";

const encodeToken = (key, value) => {
  const token = jwt.sign({ [key]: value }, process.env.SECRET_KEY);
  return token;
};
const decodeToken = (token) => {
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  return decoded;
};
const authenticate = (req, res) => {
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

export { authenticate };
