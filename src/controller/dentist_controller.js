import bcrypt from "bcrypt";

const createDentist = (req, res) => {
  const { first_name, middle_name, last_name, email, age, password } = req.body;
  const saltRounds = process.env.SALT_ROUNDS;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        console.log(hash);
        res.sendStatus(200);
      }
    });
  });
};
const viewDentist = (req, res) => {
  res.send(req.params.id);
};
const editDentist = (req, res) => {};
const deleteDentist = (req, res) => {};

export { createDentist, viewDentist, editDentist, deleteDentist };
