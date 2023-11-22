const createDentist = (req, res) => {};
const viewDentist = (req, res) => {
  res.send(req.params.id);
};
const editDentist = (req, res) => {};
const deleteDentist = (req, res) => {};

export { createDentist, viewDentist, editDentist, deleteDentist };
